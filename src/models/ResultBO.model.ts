class ResultBO {
  status: boolean;
  message: string;
  /**
   *
   */
  constructor() {
    (this.status = true), (this.message = 'Thành công');
  }

  setFail(message: string) {
    (this.status = false), (this.message = message);
  }
}

export default ResultBO;
