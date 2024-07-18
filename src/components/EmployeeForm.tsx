
import { DatePicker, Form, Input, Radio, Select, Button, Typography } from 'antd';
import React from 'react';
import './EmployeeForm.css';
import TextArea from 'antd/es/input/TextArea';
import { inputMask } from '../utils/utils';
import { useFormikContext, Form as FormikForm } from 'formik';
import { FORM_VALUES } from './formValidations';
import { useEmployeeData } from '../hooks/useEmployeeData';

const { Text } = Typography;
const { Option } = Select;

const EmployeeForm = () => {

  const { 
    values, 
    errors, 
    touched,
    setFieldValue, 
    submitForm 
  } = useFormikContext <FORM_VALUES> ();

  const { 
    issuing_body, 
    uf_options, 
    laboral_activities, 
    responsible_company 
  } = useEmployeeData();    

  const handleSaveEmployeeInfos = () => {
    submitForm();
  };

  return (
    <FormikForm className='employee-form-container'>
        <Form.Item className='employee-form-item'>
            <Text className='add-employee-title'>
                Adicionar funcionário
            </Text>
        </Form.Item>

        <Text className='employee-form-title'>
            CPF
        </Text>

        <Form.Item className='employee-form-item'>
            <Input 
                name='cpf'
                className='employee-form-input' 
                placeholder='000.000.000-00'
                maxLength={14}
                onChange={(e) => setFieldValue('cpf', e.target.value)}
                value={inputMask(values.cpf)}
            />

            {errors.cpf && touched.cpf && 
                <Text className='employee-form-error'>{errors.cpf}</Text>}
        </Form.Item>

        <Text className='employee-form-title'>
            Nome completo
        </Text>

        <Form.Item className='employee-form-item'>
            <Input
                name='fullName'
                className='employee-form-input' 
                placeholder='Nome completo'
                onChange={(e) => setFieldValue('fullName', e.target.value)}
                value={values.fullName}
                disabled={!values.cpf}
            />

            {errors.fullName && touched.fullName &&
                <Text className='employee-form-error'>{errors.fullName}</Text>}
        </Form.Item>
   
        <div className='employee-form-item-div'>
            <Form.Item className='employee-item-div'>
                <Text className='employee-form-title'>
                    RG
                </Text>

                <Input 
                    name='rg'
                    className='employee-form-input'
                    placeholder='00.000.000-0'
                    onChange={(e) => setFieldValue('rg', e.target.value)}
                    value={values.rg}
                    disabled={!values.fullName}
                />

                {errors.rg && touched.rg &&
                    <Text className='employee-form-error'>{errors.rg}</Text>}
            </Form.Item>

            <Form.Item 
                name='issuingBody'
                className='employee-item-div'
            >
                <Text className='employee-form-title'>
                    Órgão Emissor 
                </Text>
                    <Select 
                        placeholder='Órgão Emissor'
                        onChange={(value) => setFieldValue('issuingBody', value)}
                        disabled={!values.rg}
                        >
                        {issuing_body?.map((isb) => (
                            <Option key={isb.key} value={isb.id}>
                                {isb.value}
                            </Option>
                        ))}
                    </Select>

                {errors.issuingBody && touched.issuingBody && 
                    <Text className='employee-form-error'>{errors.issuingBody}</Text>}
            </Form.Item>

            <Form.Item 
                name='uf'
                className='employee-item-div'    
            >
                <Text className='employee-form-title'>
                    UF
                </Text>
                    <Select 
                        placeholder='UF' 
                        onChange={(value) => setFieldValue('uf', value)}
                        disabled={!values.issuingBody} 
                        >
                        {uf_options?.map((uf) => (
                            <Option key={uf.key} value={uf.id}>
                                {uf.value}
                            </Option>
                        ))}
                    </Select>

                {errors.uf && touched.uf && 
                    <Text className='employee-form-error'>{errors.uf}</Text>}
            </Form.Item>
        </div>

        <div className='radio-group-div'>
            <div className='radio-group-div-child'>
                <Form.Item 
                    name='gender'
                    className='employee-form-item'
                >
                    <Text className='employee-form-title'>
                        Gênero
                    </Text>
                        <div className='radio-group'>
                            <Radio.Group
                                onChange={(e) => setFieldValue('gender', e.target.value)}
                                value={values.gender}
                                disabled={!values.uf}
                            >
                                <Radio id='feminino' value='feminino'>
                                    Feminino 
                                </Radio>
                                <Radio id='masculino' value='masculino'>
                                    Masculino
                                </Radio>
                            </Radio.Group>
                        </div>

                    {errors.gender && touched.gender &&  
                        <Text className='employee-form-error'>{errors.gender}</Text>}
                </Form.Item>
            </div>
            
            <div className='radio-group-div-child'>
                <Form.Item 
                    name='foreigner'
                    className='employee-form-item'
                >
                    <Text className='employee-form-title'>
                        É estrangeiro?
                    </Text>
                        <div className='radio-group'>
                            <Radio.Group
                                onChange={(e) => setFieldValue('foreigner', e.target.value)}
                                value={values.foreigner}
                                disabled={!values.gender}
                            >
                                <Radio id='sim' value='sim'>
                                    Sim 
                                </Radio>
                                <Radio id='não' value='não'>
                                    Não 
                                </Radio>
                            </Radio.Group>
                        </div>

                    {errors.foreigner && touched.foreigner &&
                        <Text className='employee-form-error'>{errors.foreigner}</Text>}
                </Form.Item>
            </div>   
        </div>

        <div className='employee-form-item-div'>
            <div className='datepicker-age'>
                <Form.Item 
                    name='dayOfBirth'
                    className='employee-form-item'    
                >
                    <Text className='employee-form-title'>
                        Data de Nascimento 
                    </Text>
                        <DatePicker
                            className='date-picker' 
                            format='DD/MM/YYYY'
                            onChange={(date) => setFieldValue('dayOfBirth', date.format('DD/MM/YYYY'))}
                            disabled={!values.foreigner}
                        />

                    {errors.dayOfBirth && touched.dayOfBirth && 
                        <Text className='employee-form-error'>{errors.dayOfBirth}</Text>}
                </Form.Item>
            </div>
            
            <div className='employee-form-age'>
                <Form.Item
                    name='age'
                >
                    <Text className='employee-form-title'>
                        Idade 
                    </Text>
                        <Input 
                            className='employee-form-input-age'
                            placeholder='Idade'
                            onChange={(e) => setFieldValue('age', e.target.value)}
                            value={values.age}
                            disabled={!values.dayOfBirth}
                        />

                    {errors.age && touched.age &&
                        <Text className='employee-form-error'>{errors.age}</Text>}
                </Form.Item>
            </div>

            <div className='is-adult'>
                <Form.Item 
                    name='isAdult'
                    className='employee-form-item'
                >
                    <span className='employee-form-title'>Possui maioridade?</span>
                        <div className='radio-group'>
                            <Radio.Group
                                onChange={(e) => setFieldValue('isAdult', e.target.value)}
                                value={values.isAdult}
                                disabled={!values.age}
                            >
                                <Radio id='sim' value='sim'>Sim</Radio>
                                <Radio id='não' value='não'>Não</Radio>
                            </Radio.Group>
                        </div>
                    
                    {errors.isAdult && touched.isAdult &&
                        <Text className='employee-form-error'>{errors.isAdult}</Text>}
                </Form.Item>
            </div>
        </div>

        <div className='employee-form-item'>
            <Text className='employee-form-title'>
                Data de admissão
            </Text>

            <Form.Item name='entryDate'>
                <DatePicker 
                    className='entry-date' 
                    format='DD/MM/YYYY'
                    onChange={(date) => setFieldValue('entryDate', date.format('DD/MM/YYYY'))}
                    disabled={!values.isAdult}
                />

                {errors.entryDate && touched.entryDate &&
                    <Text className='employee-form-error'>{errors.entryDate}</Text>}
            </Form.Item>
        </div>                
        

        <div className='employee-form-item'>
            <Text className='employee-form-title'>
                Atividade laboral
            </Text>

            <Form.Item name='laboralActivite'>
                <Select 
                    className='laboral-selection'
                    placeholder='Seleciona a atividade laboral'
                    onChange={(value) => setFieldValue('laboralActivite', value)}
                    disabled={!values.entryDate}
                >
                    {laboral_activities?.map((laboral) => (
                        <Option key={laboral.key} value={laboral.value}>
                            {laboral.value}
                        </Option>
                    ))}
                </Select>

                {errors.laboralActivite && touched.laboralActivite &&
                    <Text className='employee-form-error'>{errors.laboralActivite}</Text>}
            </Form.Item>
        </div>
        
        <div className='employee-form-item'>
            <Text className='employee-form-title'>
                Empresa responsável
            </Text>

            <Form.Item name='responsibleCompany'>
                <Select 
                    className='laboral-selection'
                    placeholder='Selecione a empresa responsável'
                    onChange={(value) => setFieldValue('responsibleCompany', value)}
                    disabled={!values.laboralActivite}
                >
                    {responsible_company?.map((company) => (
                        <Option key={company.key} value={company.value}>
                            {company.value}
                        </Option>
                    ))}
                </Select>

                {errors.responsibleCompany && touched.responsibleCompany &&
                    <Text className='employee-form-error'>{errors.responsibleCompany}</Text>}
            </Form.Item>
        </div>
        
        <div className='employee-form-item'>    
            <Text className='employee-form-title'>
                Obervações (Opcional)
            </Text>

            <Form.Item 
                name='observations'
                className='employee-form-item'
            >
                <TextArea 
                    onChange={(e) => setFieldValue('observations', e.target.value)}
                    value={values.observations}
                />
            </Form.Item>
        </div>

    <div className='btns'>
        <Button 
            type='primary'
            className='save-btn'
            onClick={handleSaveEmployeeInfos}
        >
            Adicionar funcionário
        </Button>

        <Button 
            className='cancel-btn' 
            type='default'
        >
            Cancelar 
        </Button>
    </div>
    </FormikForm>
  )
}

export default EmployeeForm