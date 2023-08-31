const Contact = () => {
  return (
    <>
      <section id="Contacts" className="flex flex-col h-screen bg-black text-white w-full justify-center items-center bg-[url('https://raw.githubusercontent.com/soulemanou-software/my_portfolio/feature/src/assets/kody_skiing_flying_yellow.webp')] md:bg-[left_bottom] bg-[left_bottom] bg-no-repeat md:bg-[length:250px] bg-[length:130px]">
        <div className="grid justify-center place-items-center ">
          <h2 data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-duration="4000" className="bg-[url('https://github.com/soulemanou-software/my_portfolio/blob/feature/src/assets/A02.jpg?raw=true')]  md:bg-[left_bottom] bg-[left_bottom] bg-no-repeat md:bg-[length:300px] bg-[length:300px] text-5xl font-bold bg-clip-text text-transparent drop-shadow-[1.5px_-1.5px_1px_white] mb-20">
            #Contact Me
          </h2>
          <p className="px-5 text-sm text-center md:text-xl" >Feel free to reach out to me through the Contact Me section in my portfolio.
            <br />I look forward to connecting with you!</p>
        </div>
        <div className="w-full px-10 py-9 md:px-80 ">

          <form action="https://formspree.io/f/xpzgdrbj"
            method="POST">
            <div className="mb-4">
              {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
              <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@domain.com" required />
            </div>
            <div className="mb-4">

              {/* <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label> */}
              <textarea id="message" rows="4" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Blow Me Up</button>
          </form>

        </div>
      </section>
    </>
  );
}
export default Contact;