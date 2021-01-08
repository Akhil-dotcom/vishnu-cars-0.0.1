import React from 'react'
import './Query.scss'
import { useForm } from 'react-hook-form'
import BookIcon from '@material-ui/icons/Book';
import DialpadIcon from '@material-ui/icons/Dialpad';
import { Button } from '@material-ui/core'

function Query() {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    
   
    return (
        <div className="query" id='query__page'>
            <div className="query__sub">Choose Course</div>
            <div className="query__head">Come and learn from the BEST.</div>
            <div className="query__main">
                <div className="query__left">
                    <div className="query__left__head"><BookIcon /> Online Form</div>
                    <div className="query__left__sub">Learn from the best proffesionals and make the best out of what we provide.</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input__fields">
                            <input type='text' placeholder='Name' name='name' ref={register({required: 'true'})} />
                            {errors.name && <p>Field Required</p>}
                            <input type='text' placeholder='Phone Number' name='phoneNumber' ref={register({required: 'true', maxLength: 10, minLength: 10})} />
                            {errors.phoneNumber && <p>Field Required</p>}
                            <input type='text' placeholder="Email Address" name='email' ref={register} />
                        </div>
                        <div className='textarea'><textarea placeholder='Any Queries' defaultValue='No Queries' ref={register} /></div>
                        <div className='terms'><input type='checkbox' name='checked' ref={register({required: 'true'})} /> By Checking you accept the <a>terms and conditions.</a></div>
                        {errors.checked && <p>Required</p>}
                        <Button type='submit' className='btn'>Submit</Button>
                    </form>
                </div>
                <div className="query__right">
                    <div className="query__right__top">
                        <div className="query__right__head"><DialpadIcon /> Contact Us</div>
                    </div>
                    <div className="query__right__bottom">
                        <div className="contact">Contact</div>
                        <a className='contact__number' href="tel:+919710635120"><div className='span'>+91</div>9710635120</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Query
