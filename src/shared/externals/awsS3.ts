import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export class AWSS3 {
  async getPresigned(filename: string) {
    const s3Client = new S3Client({ region: 'us-east-2' });
    const command = new GetObjectCommand({
      Bucket: 'influencer',
      Key: filename,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 5 });

    return url;
  }

  async presigned(filename: string) {
    const s3Client = new S3Client({ region: 'us-east-2' });
    const command = new PutObjectCommand({
      Bucket: 'influencer',
      Key: `${filename}`,
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });

    return url;
  }
}
