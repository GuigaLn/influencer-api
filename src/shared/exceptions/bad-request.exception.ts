import { HttpException, HttpStatus } from '@nestjs/common';

export class InfluencerNotFound extends HttpException {
  constructor(message?: string) {
    super(
      { message: message || 'Opss! Influencer Not Found' },
      HttpStatus.NOT_FOUND,
    );
  }

  getResponse() {
    return {
      statusCode: this.getStatus(),
      message: this.message,
    };
  }
}
