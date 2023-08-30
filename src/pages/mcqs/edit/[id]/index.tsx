import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getMcqById, updateMcqById } from 'apiSdk/mcqs';
import { mcqValidationSchema } from 'validationSchema/mcqs';
import { McqInterface } from 'interfaces/mcq';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';

function McqEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<McqInterface>(
    () => (id ? `/mcqs/${id}` : null),
    () => getMcqById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: McqInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateMcqById(id, values);
      mutate(updated);
      resetForm();
      router.push('/mcqs');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<McqInterface>({
    initialValues: data,
    validationSchema: mcqValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Mcqs',
              link: '/mcqs',
            },
            {
              label: 'Update Mcq',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Mcq
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.question}
            label={'Question'}
            props={{
              name: 'question',
              placeholder: 'Question',
              value: formik.values?.question,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_a}
            label={'Option A'}
            props={{
              name: 'option_a',
              placeholder: 'Option A',
              value: formik.values?.option_a,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_b}
            label={'Option B'}
            props={{
              name: 'option_b',
              placeholder: 'Option B',
              value: formik.values?.option_b,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_c}
            label={'Option C'}
            props={{
              name: 'option_c',
              placeholder: 'Option C',
              value: formik.values?.option_c,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.option_d}
            label={'Option D'}
            props={{
              name: 'option_d',
              placeholder: 'Option D',
              value: formik.values?.option_d,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.answer}
            label={'Answer'}
            props={{
              name: 'answer',
              placeholder: 'Answer',
              value: formik.values?.answer,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.subject}
            label={'Subject'}
            props={{
              name: 'subject',
              placeholder: 'Subject',
              value: formik.values?.subject,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.book}
            label={'Book'}
            props={{
              name: 'book',
              placeholder: 'Book',
              value: formik.values?.book,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.chapter}
            label={'Chapter'}
            props={{
              name: 'chapter',
              placeholder: 'Chapter',
              value: formik.values?.chapter,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/mcqs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'mcq',
    operation: AccessOperationEnum.UPDATE,
  }),
)(McqEditPage);
