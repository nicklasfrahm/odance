export const asset = (path) => {
  const { hostname } = window.location;
  if (hostname === 'localhost') {
    return `assets/${path}`;
  }
  const mediaAPI = 'https://media.githubusercontent.com/media';
  const namespace = 'nicklasfrahm/odance';
  const branch = 'main';
  return `${mediaAPI}/${namespace}/${branch}/web/public/assets/${path}`;
};
