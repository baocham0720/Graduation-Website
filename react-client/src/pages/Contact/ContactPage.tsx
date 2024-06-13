

const ContactPage = () => {
  return (
 
    <div className='bg-gray-100 min-h-screen p-8'>
      <h1 className='text-3xl text-center mb-8'>Contact</h1>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md m-4'>
          <h2 className='text-xl font-bold mb-2'>Contact Information</h2>
          <p className='mb-4'>Fill the form below or write us. We will help you as soon as possible.</p>
          <div className='mb-4 p-4 bg-red-100 rounded'>
            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
            <p>+1(323) 9847 3847 383</p>
            <p>+1(434) 5466 5467 443</p>
          </div>
          <div className='mb-4 p-4 bg-blue-100 rounded'>
            <h3 className='text-lg font-semibold mb-2'>Email</h3>
            <p>Demoemail@gmail.com</p>
            <p>rafiqulisamsuvobd@gmail.com</p>
          </div>
          <div className='p-4 bg-green-100 rounded'>
            <h3 className='text-lg font-semibold mb-2'>Address</h3>
            <p>4571 Washington Ave. Manchester, Road 2342, Kentucky 39495</p>
            <div className='mt-2'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9294051200217!2d-74.00601578459445!3d40.71277517933037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KHQtdCy0LDQuSDQodC10LHQsCDQnNGD0YLQuNC90Lg!5e0!3m2!1svi!2s!4v1598545145140!5m2!1svi!2s"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className='bg-white p-8 rounded shadow-md w-full max-w-md m-4'>
          <h2 className='text-2xl font-semibold mb-4 text-center'>Get In Touch</h2>
          <form id="contactForm">
            <div className='mb-4'>
              <label className='block text-gray-700'>First Name*</label>
              <input type='text' id='first-name' className='w-full p-2 border border-gray-300 rounded mt-2' placeholder='Demo Name' required />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email Address*</label>
              <input type='email' id='email' className='w-full p-2 border border-gray-300 rounded mt-2' placeholder='info@quomodosoft.com' required />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Subject*</label>
              <input type='text' id='subject' className='w-full p-2 border border-gray-300 rounded mt-2' placeholder='Your Subject here' required />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Message*</label>
              <textarea id='message' className='w-full p-2 border border-gray-300 rounded mt-2' rows='4' placeholder='Type your message here' required></textarea>
            </div>
            <button type='submit' className='w-full bg-black text-white py-2 rounded'>Send Now</button>
          </form>
        </div>
      </div>
    </div>
   
  ); 
}

export default ContactPage;
