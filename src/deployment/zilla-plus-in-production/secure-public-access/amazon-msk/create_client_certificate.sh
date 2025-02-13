#!/bin/bash

while [ $# -gt 0 ]; do
    if [[ $1 == "--"* ]]; then
        v="${1/--/}"
        v="${v//-/$'_'}"
        declare "$v"="$2"
        shift
    fi
    shift
done

programname=$0

function usage {
    echo ""
    echo "Creates signed client certificate and uploads client private key to SecretsManager"
    echo ""
    echo "usage: $programname --client-name string  --acm-pca-certificate-authority string"
    echo ""
    echo "  --client-name string                         name of the client"
    echo "                                               (example: client-1)"
    echo "  --acm-pca-certificate-authority string       AWS private certificate authority arn"
    echo "                                               (example: arn:aws:acm-pca:us-east-1..:certificate-authority)"
    echo ""
}

function die {
    printf "Script failed: %s\n\n" "$1"
    exit 1
}

if [[ -z $client_name ]]; then
    usage
    die "Missing parameter --client-name"
elif [[ -z $acm_pca_certificate_authority ]]; then
    usage
    die "Missing parameter --acm-pca-certificate-authority"
fi

set -ex

openssl genrsa -out "$client_name".key.pem 4096
openssl pkcs8 -topk8 -nocrypt -in "$client_name".key.pem -out "$client_name".pkcs8.pem

openssl req -new -key "$client_name".key.pem -out "$client_name".csr

aws acm-pca issue-certificate \
--region us-east-1 \
--certificate-authority-arn "$acm_pca_certificate_authority" \
--csr fileb://"$client_name".csr \
--signing-algorithm "SHA256WITHRSA" \
--validity Value=365,Type="DAYS" \
--idempotency-token 1234 > "$client_name".json

clientCertArn=$(jq -r '.CertificateArn' "$client_name".json)

aws secretsmanager create-secret \
--region us-east-1 \
--name "$client_name" \
--secret-string file://"$client_name".pkcs8.pem \
--tags "[{\"Key\":\"certificate-authority-arn\", \"Value\":\"$acm_pca_certificate_authority\"}, {\"Key\":\"certificate-arn\", \"Value\": \"$clientCertArn\"}]"

aws acm-pca get-certificate \
--region us-east-1 \
--certificate-arn "$clientCertArn" \
--certificate-authority-arn "$acm_pca_certificate_authority" \
--output text | sed "s/\t/\n/g" > "$client_name".cert

```