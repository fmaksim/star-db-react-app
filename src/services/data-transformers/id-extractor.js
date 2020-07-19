export default class IdExtractor {
  static extractId = url => {
      const idRegExp = /\/([0-9]*)\/$/;
      return url.match(idRegExp)[1];
  }
};