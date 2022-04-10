export const api = {
  url: '//' + window.location.hostname + ':' + (window.location.hostname === 'localhost' ? '8000' : `${process.env.PORT}`),
  endpoints: {
    current: 'current',
    forecast: 'forecast'
  }
};