export default {
  getQueryParameters(query, defaultMessage) {
    return query ? query : defaultMessage;
  },
};