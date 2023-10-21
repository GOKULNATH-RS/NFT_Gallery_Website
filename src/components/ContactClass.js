import React from 'react';

class ContactClass extends React.Component{


    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);

        this.state={
            InstaFollows:223,
            FacebookFollows:112,
            TwitterFollows:45,
        }
    }

    render(){

        const {phone,mail} = this.props;

        return(
            <section className="section flex flex-col gap-10">
                <p className='text-4xl lg:text5xl font-bold tracking-wider'>Contact Us</p>
                <div className='flex flex-col gap-4'>
                    <p>{phone}</p>
                    <p>{mail}</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5 items-center'>
                        <h2 className='text-3xl font-bold'>Socials</h2>
                        <button onClick={() => {
                             this.setState({
                                InstaFollows:  Math.round( ( this.state.InstaFollows + Math.random()) * 10) / 10,
                                FacebookFollows:Math.round((this.state.FacebookFollows +  Math.random()) *10)/10,
                                TwitterFollows: Math.round((this.state.TwitterFollows + Math.random()) *10)/10,
                                })
                        }} className='Border px-3 py-1 text-xs rounded-lg font-light hover:border-opacity-30'>Refresh</button>
                    </div>
                    <div className='flex  max-sm:flex-col gap-6 max-sm:gap-4'>
                        <a className='flex gap-2 items-center' href="https://www.instagram.com/">
                            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram"/>
                            <p className='font-bold text-xl'>{this.state.InstaFollows}K</p>
                        </a>
                        <a className='flex gap-2 items-center'  href="https://www.facebook.com/">
                            <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="Facebook"/>
                            <p className='font-bold text-xl'>{this.state.FacebookFollows}K</p>
                        </a>
                        <a className='flex gap-2 items-center' href="https://www.twitter.com/">
                            <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter"/>
                            <p className='font-bold text-xl'>{this.state.TwitterFollows}K</p>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactClass;