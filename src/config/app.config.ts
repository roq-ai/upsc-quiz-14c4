interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin', 'Content Creator', 'Examiner'],
  tenantName: 'Organization',
  applicationName: 'UPSC Quiz',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Engage with content by liking, sharing, and commenting',
    'Save articles and create PDFs for future reference',
    'Add given questions to personal test',
    'Create a full schedule for planned tests',
    'View tooltips and glossary tooltips',
    'View performance evaluation',
    'Navigate through different learning sections',
  ],
  ownerAbilities: [
    'Invite Content Creators and Examiners to Organization',
    'Manage user profiles',
    'Toggle between content sections',
  ],
};
