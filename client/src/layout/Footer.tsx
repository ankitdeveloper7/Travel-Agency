export const Footer = () => {
  return (
    <>
      <section id="footer" className="bg-[#161618] text-[#bfc3c9]">
        <div className="m-4 grid max-w-7xl grid-cols-1 px-8 py-25 md:grid-cols-5">
          <div>
            <div>Manu Bar</div>
            <div>Home</div>
            <div>About Us</div>
            <div>Tours</div>
            <div>Blog</div>
          </div>
          <div>
            <div>Contact Info</div>
            <div>2464 Royal Ln. Mesa, New Jersey 45463</div>
            <div>629)555-0129</div>
            <div>travely@ pixprooo.com</div>
          </div>
          <div>
            <div>Social Media</div>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>YouTube</div>
            <div>X(Twitter)</div>
          </div>
          <div className="md:col-span-2">
            <div>travely</div>
            <div>
              Stay connected with us on social media! Follow our channels for
              exciting updates, insightful content, and the latest news from our
              industry.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
