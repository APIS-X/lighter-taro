import React from 'react';
import {
  Form,
  Input,
  TextArea,
  Radio,
  Uploader,
  Picker,
  Cell,
} from '@nutui/nutui-react';

import { Layout } from '@/components';

const FormItem = Form.Item;
const RadioGroup = Radio.RadioGroup;

const isRequired = true;

const listData = [
  [
    { value: 1, text: '南京市' },
    { value: 2, text: '无锡市' },
    { value: 3, text: '海北藏族自治区' },
    { value: 4, text: '北京市' },
    { value: 5, text: '连云港市' },
    { value: 6, text: '浙江市' },
    { value: 7, text: '江苏市' },
    { value: 8, text: '大庆市' },
    { value: 9, text: '绥化市' },
    { value: 10, text: '潍坊市' },
    { value: 11, text: '请按市' },
    { value: 12, text: '乌鲁木齐市' },
  ],
];

const PageSign = () => {
  return (
    <Layout activeIndex={1}>
      <Form labelPosition='Left'>
        <FormItem
          label='申请院校'
          name='signSchools'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
            disabled
          />
          <Picker isVisible={false} listData={listData} />
        </FormItem>
        <FormItem
          label='姓名'
          name='realName'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
          />
        </FormItem>
        <FormItem
          label='姓名拼音'
          name='englishName'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
          />
        </FormItem>
        <FormItem label='性别' name='russianLevel'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem
          label='地址'
          name='address'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
            disabled
          />
          <Picker isVisible={false} listData={listData} />
        </FormItem>
        <FormItem
          label='毕业院校类别'
          name='institutionType'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
            disabled
          />
          <Picker isVisible={false} listData={listData} />
        </FormItem>
        <FormItem
          label='高中毕业院校'
          name='graduationSchool'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
          />
        </FormItem>
        <FormItem label='类型' name='signType'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label='俄语程度' name='russianLevel'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label='信息来源' name='channelSource'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label='所属学校班型' name='intendedClass'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label='意向申请专业' name='intendedMajor'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label='上传证件照' name='certificatePhoto'>
          <Uploader url='' onStart='' />
        </FormItem>
        <FormItem
          label='身份证号码'
          name='idCardNo'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
          />
        </FormItem>
        <FormItem label='身份证信息' name='idCardPositive'>
          <Uploader url='' onStart='' />
        </FormItem>
        <FormItem label='上传作品' name='sampleReels'>
          <Uploader url='' onStart='' />
        </FormItem>
        <FormItem
          label='监护人姓名'
          name='guardianName'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
          />
        </FormItem>
        <FormItem
          label='监护人电话'
          name='guardianPhone'
          required={isRequired}
          rules={[{ required: isRequired, message: '' }]}
        >
          <Input
            className='nut-input-text'
            placeholder=''
            type='text'
            border={false}
          />
        </FormItem>
      </Form>
    </Layout>
  );
};

export default PageSign;
