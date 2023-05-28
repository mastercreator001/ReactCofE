import { PhotoSwipe } from "react-photoswipe";

let isOpen = true;

let items = [
  {
    src: "http://lorempixel.com/1200/900/sports/1",
    w: 1200,
    h: 900,
    title: "Image 1",
  },
  {
    src: "http://lorempixel.com/1200/900/sports/2",
    w: 1200,
    h: 900,
    title: "Image 2",
  },
];

let options = {
  //http://photoswipe.com/documentation/options.html
};

handleClose = () => {
  isOpen: false;
};

<PhotoSwipe isOpen={isOpen} items={items} options={options} onClose={handleClose} />;
