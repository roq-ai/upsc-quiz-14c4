import * as yup from 'yup';

export const currentAffairsValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  paper: yup.string().required(),
  subject: yup.string().required(),
  topic: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
