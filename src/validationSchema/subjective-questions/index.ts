import * as yup from 'yup';

export const subjectiveQuestionValidationSchema = yup.object().shape({
  question: yup.string().required(),
  answer: yup.string().required(),
  subject: yup.string().required(),
  book: yup.string().required(),
  chapter: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
