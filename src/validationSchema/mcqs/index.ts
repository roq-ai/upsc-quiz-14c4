import * as yup from 'yup';

export const mcqValidationSchema = yup.object().shape({
  question: yup.string().required(),
  option_a: yup.string().required(),
  option_b: yup.string().required(),
  option_c: yup.string().required(),
  option_d: yup.string().required(),
  answer: yup.string().required(),
  subject: yup.string().required(),
  book: yup.string().required(),
  chapter: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
