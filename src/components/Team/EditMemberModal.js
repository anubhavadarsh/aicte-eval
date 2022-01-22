import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { useDispatch } from "react-redux";
import { teamAction } from "store/teamSlice";
import { membersRef } from "config/firebase";
import Backdrop from "components/UI/Backdrop";
import ModalForm from "components/UI/ModalForm";

const EditMemberModal = ({
  inpId,
  inpName,
  inpImage,
  inpDesignation,
  inpAbout,
  inpFacebook,
  inpInstagram,
  inpTwitter,
  setShowModal,
}) => {
  const [name, setName] = useState(inpName);
  const [image, setImage] = useState(inpImage);
  const [designation, setDesignation] = useState(inpDesignation);
  const [about, setAbout] = useState(inpAbout);
  const [facebook, setFacebook] = useState(inpFacebook);
  const [instagram, setInstagram] = useState(inpInstagram);
  const [twitter, setTwitter] = useState(inpTwitter);

  const dispatch = useDispatch();

  const imageRef = useRef();

  let formIsValid =
    name.length !== 0 &&
    designation.length !== 0 &&
    about.length !== 0 &&
    image.length !== 0;

  const firebaseImageUpload = async (file) => {
    try {
      const imageRef = ref(membersRef, inpId);

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
      id: inpId,
      name,
      designation,
      about,
      image,
      twitter,
      facebook,
      instagram,
    };

    dispatch(teamAction.editMember(member));
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

export default EditMemberModal;
