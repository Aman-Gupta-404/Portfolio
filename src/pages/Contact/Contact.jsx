import React, { useState, useEffect } from "react";
import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { showModal } from "../../redux/features/modalSlics";
import { FaLeaf } from "react-icons/fa";

function Contact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [message, setMessage] = useState("");

  const [nameDull, setNameDull] = useState(false);
  const [emailDull, setEmailDull] = useState(false);
  const [organizationDull, setOrganizationDull] = useState(false);
  const [messageDull, setMessageDull] = useState(false);

  const [useModal, setUseModal] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() =>
    //
    {}, [name, email, organizationName, message]);

  const pageTransitionVariant = {
    pageInitial: {
      y: "100vh",
    },
    pageEnter: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.7,
      },
    },
    pageExit: {
      y: 0,
      transition: {
        delay: 0,
        duration: 1,
      },
    },
  };

  const modalVariant = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const renderModal = () => {
    return (
      <motion.div className="contact_modal--container">
        <div
          className="contact__modal"
          // variants={modalVariant}
          // initial="hidden"
          // animate="visible"
        >
          <div className="contact__modal_text">
            <p className="font_20 font_black">
              Your message was sent successfully!
            </p>
          </div>
          <button
            className="contact__modal--btn"
            onClick={() => setUseModal(false)}
          >
            Okay
          </button>
        </div>
      </motion.div>
    );
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setOrganizationName("");
    setMessage("");
  };

  const handleOnSubmit = () => {
    if (loading) {
      return;
    } else {
      setLoading(true);

      const flag =
        name.length === 0 ||
        email.length === 0 ||
        organizationName.length === 0 ||
        message.length === 0;
      if (flag) {
        // TODO: display error
        // console.log("error boss");
        setLoading(false);
        dispatch(showModal("Please fill all the fields"));
      } else {
        const _data = {
          name: name,
          email: email,
          organizationName: organizationName,
          message: message,
        };

        // send message
        emailjs
          .send(
            "service_cuw01zg",
            "template_1ssjewl",
            _data,
            "KpXi-QiHIztwKIVCQ"
          )
          .then((res) => {
            clearInputs(); //clear the inputs
            // console.log("success!");
            // TODO: the popup messages
            setLoading(false);
            dispatch(
              showModal(
                "Thankyou, you'r message was sent. I will get back to you"
              )
            );
            // setModalMessage("Please fill all the fields!");
            // setUseModal(true);
          })
          .catch((err) => {
            // console.log(err);
            setLoading(false);
            dispatch(showModal("Some error occured, please drop me a mail"));
            // setModalMessage("Some error occured, please drop me a mail");
            // setUseModal(true);
          });
      }
    }
  };

  // useEffect(() => {}, [modalMessage, useModal]);
  //
  return (
    <motion.div
      className="contact"
      variants={pageTransitionVariant}
      initial="pageInitial"
      animate="pageEnter"
      exit="pageExit"
    >
      <Navbar textColorBlack={false} />
      {/* {useModal ? renderModal() : null} */}
      <div className="contact__section">
        <div className="contact__section--header">
          <p className="contact__heading font_60 font_white">Have a project?</p>
          <p className="contact__subHeading font_60">Let's Work Together</p>
        </div>
        <div className="contact__SubSection">
          <div className="contact__left">
            <div className="contact__left--form">
              {/* Name */}
              <div className="contact__left--form--row">
                <div className="contact__left__form__number">
                  <p className="font_20 font_offblack">01</p>
                </div>
                <div className="contact__left__form__question">
                  <label
                    htmlFor="name"
                    className={`font_28 contact__form--label ${
                      nameDull ? "font_offblack" : "font_white"
                    }`}
                  >
                    What's your name
                  </label>
                  <input
                    type="text"
                    className="contact__input--single"
                    id={`${nameDull ? "contact__input__dull" : ""}`}
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => {
                      if (e.target.value?.length > 1) setNameDull(true);
                      else setNameDull(false);
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* Email */}
              <div className="contact__left--form--row">
                <div className="contact__left__form__number">
                  <p className="font_20 font_offblack">02</p>
                </div>
                <div className="contact__left__form__question">
                  <label
                    htmlFor="name"
                    className={`font_28 ${
                      emailDull ? "font_offblack" : "font_white"
                    }`}
                  >
                    What's your email
                  </label>
                  <input
                    type="text"
                    className="contact__input--single"
                    id={`${emailDull ? "contact__input__dull" : ""}`}
                    placeholder="john@gmail.com"
                    value={email}
                    onChange={(e) => {
                      if (e.target.value?.length > 1) setEmailDull(true);
                      else setEmailDull(false);
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* Organization */}
              <div className="contact__left--form--row">
                <div className="contact__left__form__number">
                  <p className="font_20 font_offblack">03</p>
                </div>
                <div className="contact__left__form__question">
                  <label
                    htmlFor="name"
                    className={`font_28 ${
                      organizationDull ? "font_offblack" : "font_white"
                    }`}
                  >
                    What's your organization name?
                  </label>
                  <input
                    type="text"
                    className="contact__input--single"
                    id={`${organizationDull ? "contact__input__dull" : ""}`}
                    placeholder="John Pvt. Ltd."
                    value={organizationName}
                    onChange={(e) => {
                      if (e.target.value?.length > 1) setOrganizationDull(true);
                      else setOrganizationDull(false);
                      setOrganizationName(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* Message */}
              <div className="contact__left--form--row">
                <div className="contact__left__form__number">
                  <p className="font_20 font_offblack">04</p>
                </div>
                <div className="contact__left__form__question">
                  <label
                    htmlFor="name"
                    className={`font_28 ${
                      messageDull ? "font_offblack" : "font_white"
                    }`}
                  >
                    Your message
                  </label>
                  <textarea
                    type="text"
                    className="contact__input--multi"
                    id={`${messageDull ? "contact__input__dull" : ""}`}
                    placeholder="John Doe"
                    value={message}
                    onChange={(e) => {
                      if (e.target.value?.length > 1) setMessageDull(true);
                      else setMessageDull(false);
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="contact__br">
                <div className="contact__br--line"></div>
                <button
                  className="contact__submit--btn font_24"
                  onClick={handleOnSubmit}
                >
                  {loading ? "loading" : "submit"}
                </button>
              </div>
            </div>
          </div>
          <div className="contact__right">
            <p className="contact__right--text font_20 font_offwhite">
              Tell us about your vision, what challanges you are facing, what
              are your goals and expection.
            </p>
            <p className="contact__right--heading font_offblack font_18">
              Contact Details
            </p>
            <Link
              to="mailto:ag9139563@gmail.com"
              className="contact__link font_20 font_white"
            >
              ag9139563@gmail.com
            </Link>

            {/* social */}
            <p className="contact__right--heading2 font_offblack font_18">
              Socials
            </p>
            <div className="contact__socials--section">
              <Link
                to="https://linkedin.com/in/amangupta3"
                target="_blank"
                className="contact__link font_20 font_white"
              >
                LinkedIn
              </Link>
              <Link
                to="https://github.com/Aman-Gupta-404"
                target="_blank"
                className="contact__link font_20 font_white"
              >
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Contact;
