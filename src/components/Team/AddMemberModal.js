import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { nanoid } from "nanoid/non-secure";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { useDispatch } from "react-redux";
import { teamAction } from "store/teamSlice";
import { membersRef } from "config/firebase";
import Backdrop from "components/UI/Backdrop";
import ModalForm from "components/UI/ModalForm";

const AddMemberModal = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [designation, setDesignation] = useState("");
  const [about, setAbout] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");

  const dispatch = useDispatch();

  const memberRef = useRef({
    id: nanoid(),
  });

  const imageRef = useRef();

  let formIsValid =
    name.length !== 0 &&
    designation.length !== 0 &&
    about.length !== 0 &&
    image.length !== 0;

  const firebaseImageUpload = async (file) => {
    try {
      const imageRef = ref(membersRef, memberRef.current.id);

      await uploadBytes(imageRef, file);
      const url = await getDownloadURL(ref(imageRef));
      return url;
    } catch (e) {
      toast.error("🦄 failed to upload image", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return null;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!formIsValid) return;

    const member = {
      id: memberRef.current.id,
      name,
      designation,
      about,
      image,
      twitter,
      facebook,
      instagram,
    };

    dispatch(teamAction.addMember(member));
    setShowModal(false);
  };

  const uploadImage = async (evt) => {
    const url = await firebaseImageUpload(evt.target.files[0]);
    setImage(url);
  };

  return (
    <>
      <Backdrop />
      <ModalForm
        about={about}
        buttonDisabled={!formIsValid}
        designation={designation}
        facebook={facebook}
        handleFormSubmit={handleSubmit}
        image={image}
        imageRef={imageRef}
        instagram={instagram}
        name={name}
        setAbout={setAbout}
        setDesignation={setDesignation}
        setFacebook={setFacebook}
        setInstagram={setInstagram}
        setName={setName}
        setShowModal={setShowModal}
        setTwitter={setTwitter}
        twitter={twitter}
        uploadImage={uploadImage}
      />
    </>
  );
};

export default AddMemberModal;
