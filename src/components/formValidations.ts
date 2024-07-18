import * as Yup from 'yup';

export type FORM_VALUES  = {
    cpf: string,
    fullName: string,
    rg: string,
    issuingBody: string,
    uf: string,
    gender: string,
    foreigner: string,
    dayOfBirth: string,
    age: string,
    isAdult: string,
    entryDate: string,
    laboralActivite: string,
    responsibleCompany: string,
    observations: string
};

export const VALIDATIONS_SCHEMA = {
    defaultValues : {
        cpf: '',
        fullName: '',
        rg: '',
        uf: '',
        gender: '',
        foreigner: '',
        age: '',
        isAdult: '',
        observations: '',
        entryDate: '',
        dayOfBirth: '',
        issuingBody: '',
        laboralActivite: '',
        responsibleCompany: '',
    },
    schema: Yup.object().shape({ 
        cpf: Yup
            .string() 
            .required('Esse campo é obrigatório'),
        fullName: Yup
            .string()
            .required('Esse campo é obrigatório'),
        rg: Yup
            .string().required('Esse campo é obrigatório'),
        uf: Yup.string()
            .required('Esse campo é obrigatório'),
        gender: Yup
            .string()
            .required('Esse campo é obrigatório'),
        foreigner: Yup
            .string()
            .required('Esse campo é obrigatório'),
        age: Yup
            .string()
            .required('Esse campo é obrigatório'),
        isAdult: Yup
            .string()
            .required('Esse campo é obrigatório'),
        observations: Yup
            .string()
            .required('Esse campo é obrigatório'),
        entryDate: Yup
            .string()
            .required('Esse campo é obrigatório'),
        dayOfBirth: Yup
            .string()
            .required('Esse campo é obrigatório'),
        issuingBody: Yup
            .string()
            .required('Esse campo é obrigatório'),
        laboralActivite: Yup
            .string()
            .required('Esse campo é obrigatório'),
        responsibleCompany: Yup
            .string()
            .required('Esse campo é obrigatório'),
    })
};