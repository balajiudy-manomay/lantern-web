export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;

  submittedAt?: string;
  timezone?: string;
  location?: string;
  ipAddress?: string;
  device?: string;
  sourcePage?: string;
}
