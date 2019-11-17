import webpackImage from './assets/images/webpack.jpeg';

function Component() {
  const container = document.createElement('div');
  container.classList.add('container');

  const header = document.createElement('h1');
  header.innerHTML = 'Webpack is awesome';
  header.classList.add('header');

  const text = document.createElement('p');
  text.classList.add('text');
  text.innerHTML = 'Webpack is an open-source JavaScript module bundler. It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding plugins are included.';

  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = 'Check development mode';

  const image = new Image();
  image.classList.add('image');
  image.src = webpackImage;

  button.onclick = () => {
    let alertMessage = 'You are in development';

    if (process.env.NODE_ENV === 'production') {
      alertMessage = 'You are in production';
    }

    /* eslint-disable no-alert */
    alert(alertMessage);
  };

  container.appendChild(image);
  container.appendChild(header);
  container.appendChild(text);
  container.appendChild(button);

  return container;
}

document.body.appendChild(Component());
