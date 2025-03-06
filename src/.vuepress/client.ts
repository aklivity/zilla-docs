import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance({ router }) {
    router.afterEach(() => {
      // freeze gifs after one cycle
      setTimeout(() => {
        const gifs = document.querySelectorAll(".freeze-after-play");

        gifs.forEach((gif: HTMLImageElement) => {
          const duration = Number(gif.dataset.duration || 0);
          const postImg = gif.src.replace(".gif", ".png");

          if (duration && postImg) {
            setTimeout(() => {
              gif.src = postImg;
            }, duration);
          }
        });
      }, 300);
    });
  },
});
