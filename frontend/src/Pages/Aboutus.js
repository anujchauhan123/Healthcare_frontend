import { useState } from "react";
import Footer from "../Components/Footer"
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../Components/Header";

const About = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const sendMessage = () => {
        var data = JSON.stringify({
            "name": name,
            "email": email,
            "message": message,
            "phone": phone
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_HOSTNAME}sendmessage`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setName("");
                setEmail("");
                setMessage("");
                setPhone("");
                toast.success('Our support team will Contact you within 24hrs.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch(function (error) {
                toast.success('Something went wrong.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(error);
            });

    }
    return (
        <>
            <Header />
            <section class="relative max-w-screen-xl mx-auto px-10  overflow-hidden bg-white py-20 lg:py-[120px]">
                <div class="container mx-auto">
                    <div class="-mx-4 flex flex-wrap lg:justify-between">
                        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div class="mb-12 max-w-[570px] lg:mb-0">
                                <span class="text-primary mb-4 block text-base font-semibold">
                                    About Us
                                </span>
                            </div>
                        </div>
                            <div class="w-full">
                                <h4 class="text-dark mb-1 text-xl font-bold">About Us: Your Protein Source</h4>
                                <p class="text-body-color text-base">
                                    
At Protein Farm, we are passionate about promoting a healthy lifestyle through the power of protein. Our mission is to provide you with the highest quality protein products and information to help you achieve your fitness and wellness goals.
                                </p>
                            </div>


                    <div class="w-full">
                        <h4 class="text-dark mb-1 text-xl font-bold">Who We Are:</h4>
                        <p class="text-body-color text-base">

We are a team of health enthusiasts, nutrition experts, and fitness advocates who believe that protein is an essential building block for a strong and balanced body. Our collective experience and knowledge in the health and fitness industry drive us to deliver reliable and evidence-based content to our customers.

                        </p>
                    </div>




                    <div class="w-full">
                        <h4 class="text-dark mb-1 text-xl font-bold">What We Offer:</h4>
                        <p class="text-body-color text-base">
                            
At Protein Farm, you will find a wide range of premium protein products carefully curated to suit your individual needs. Whether you are a seasoned athlete, a fitness beginner, or simply someone looking to adopt a healthier lifestyle, we have the perfect protein solutions for you. From whey protein powders to plant-based alternatives, we offer a diverse selection to accommodate various dietary preferences and restrictions.

                        </p>
                    </div>





                    <div class="w-full">
                        <h4 class="text-dark mb-1 text-xl font-bold">Why Choose Us:</h4>
                        <p class="text-body-color text-base">
                            

Quality Assurance: We understand the importance of quality when it comes to nutrition. That's why all our products go through rigorous testing and quality assurance processes to ensure you receive nothing but the best.

Expert Guidance: Our team of nutritionists and fitness experts are here to support you on your journey. We provide valuable information, tips, and personalized recommendations to help you make informed decisions about your health and nutrition.

Customer Satisfaction: Your satisfaction is our top priority. We are committed to delivering excellent customer service, prompt responses to your inquiries, and a seamless shopping experience.

Community and Support: Protein Farm is not just a place to buy protein products; it's a community of like-minded individuals striving for a healthier lifestyle. Connect with others, share your experiences, and find motivation to stay on track with your fitness goals.

                        </p>
                    </div>




                    <div class="w-full">
                        <h4 class="text-dark mb-1 text-xl font-bold">Our Vision:</h4>
                        <p class="text-body-color text-base">
                           We envision a world where everyone understands the significance of proper nutrition and fitness, and protein plays a vital role in achieving that vision. Through education, accessibility, and support, we aim to empower individuals to take charge of their health and lead fulfilling lives.

Join us on this journey towards better health and vitality. Together, we can unlock the potential of protein and embrace a healthier, stronger, and more energetic version of ourselves.

Thank you for choosing Protein Farm as your partner in health and wellness. We look forward to being a part of your transformative journey.

For any inquiries or assistance, please don't hesitate to contact us. Let's make your protein-powered dreams a reality!




                        </p>
                    </div>





                    <div class="w-full">
                        <h4 class="text-dark mb-1 text-xl font-bold">Quality and Innovation</h4>
                        <p class="text-body-color text-base">

We understand that quality is paramount when it comes to nutrition. That's why we partner with leading experts in the field to develop our products. Our team of dedicated scientists, nutritionists, and fitness enthusiasts work tirelessly to formulate protein supplements that are not only effective but also safe for consumption.

Every product undergoes rigorous testing and quality checks to ensure it meets the highest standards. We are committed to transparency, and all our products come with detailed information about their ingredients and benefits.

At Protein Farm, we believe in giving back to the planet that sustains us. We are committed to adopting eco-friendly and sustainable practices throughout our supply chain. From sourcing raw materials responsibly to using recyclable packaging, we strive to minimize our environmental impact and contribute positively to the world.

Our customers are at the heart of everything we do. We are dedicated to providing exceptional customer service, and our team is always ready to assist you with any queries or concerns. Your satisfaction is our top priority, and we continuously work to improve our services and products based on your feedback.

We believe that knowledge is power, especially when it comes to nutrition. Our website is not just a place to shop for products; it's also a hub of valuable information. We provide educational resources, blog posts, and expert articles to help you make informed choices about your nutrition and fitness journey.

Protein Farm is more than just a brand; it's a community of like-minded individuals striving for better health and wellness. We encourage you to join our social media platforms and forums, where you can connect with others, share experiences, and find the support you need to stay motivated on your path to a healthier lifestyle.

We believe that everyone should have access to good nutrition. That's why we are committed to supporting charitable organizations and initiatives that work towards eradicating hunger and malnutrition. With every purchase you make, a portion of the proceeds goes to these charitable causes.

Join Us on the Journey to Better Health

Thank you for choosing Protein Farm as your partner in health and wellness. We are excited to be a part of your journey towards a healthier, stronger, and more vibrant life. Together, let's unleash the power of protein and embrace a lifestyle that nourishes our bodies and minds.

Remember, with Protein Farm, you have the strength to achieve greatness, one step at a time. Let's embark on this journey together!
                        </p>
                    </div>





                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;







