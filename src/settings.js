export const api = {
  url: `//${window.location.hostname}:${process.env.PORT || 8000}`,
  endpoints: {
    current: 'current',
    forecast: 'forecast'
  }
};