import * as React from 'react';
import Select from "react-select";
import { useForm , Controller} from "react-hook-form";
import { TextField, Checkbox, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";




function Contact(props) {

  const styleValue = ['html_css','jQuery','ECMA6','react','node','php'];
  const radioValue = ['파트타임','하루종일','딱 8시간'];

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      select: {}
    }
  });
  
  const onSubmit = (data) =>  { 
    console.log(data);
 }
  console.log(watch("example")); // watch input value by passing the name of it


  return (
    <section className='container'>
        <div className="row">
            <div className='col-4'>
                여기에 사진넣을까????<br />
                아님 뭐넣을까?????<br />
                당신이 나한테 연락을 해야하는 이유를 넣는다...
            </div>
            <div className='col'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ul>
                        <li>
                            <span>회사명</span>
                            <input {...register("company" ,  {
                                    required: true,
                                    message: "회사명은 필수 입력입니다.",
                                    }) } />
                            {errors.company && <p role="alert">{errors.company.message}</p>}
                        </li>
                        <li>
                            <span>이메일</span><input {...register("email" ,  {
                            required: true,
                            pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "이메일 형식에 맞지 않습니다.",
                            },
                        }) }  placeholder="test@email.com" />
                        {errors.email && <p role="alert">{errors.email.message}</p>}
                        </li>                            
                        <li>
                            <span>하나선택</span>
                            <select {...register("gender", {required: true, message: "꼭 하나선택하기" })}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            {errors.gender && <p role="alert">{errors.gender.message}</p>}
                        </li>
                        <li>
                           <span>수치넣기</span> 
                           <input type="number" {...register("age", { min: 18, max: 99 })} />
                        </li>
                        <li>
                        <Controller
                            name="select"
                            control={control}
                            render={({ field }) => <Select 
                            {...field} 
                            options={[
                                { value: "chocolate", label: "Chocolate" },
                                { value: "strawberry", label: "Strawberry" },
                                { value: "vanilla", label: "Vanilla" }
                            ]} 
                            />}
                        />
                        </li>
                        <li>
                            {
                                styleValue.map(( item, idx ) =>{
                                    return(
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name={ 'ability'+idx }
                                                    value={item}
                                                />
                                            }
                                            label={item}
                                            />
                                    )

                                })
                            }
                        
                        </li>
                        <li>
                        <RadioGroup                           
                          defaultValue={radioValue[0]}
                          name="worktime"
                          className='flex-md-row '
                        >

                           {
                                radioValue.map(( item, idx ) =>{
                                    return(
                                        
                                     <FormControlLabel value={item} control={<Radio />} label={item} />
   

                                    )

                                })
                            }
                              </RadioGroup>

                       
                        </li>
                    </ul>                    
                    <input type="submit" />
                </form>
            </div>
        </div>

        
        

    </section>
   
    
  );
  
}

export default Contact;