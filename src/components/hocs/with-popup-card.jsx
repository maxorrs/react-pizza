import React, {useRef, useState, useEffect} from 'react';

const withPopupCard = (Component) => {
  const WithPopupCard = (props) => {
    const [isShownPopup, setIsShownPopup] = useState(false);

    const imageRef = useRef(null);

    const enablePopupHandler = () => {
      setIsShownPopup(true);
    };

    const disablePopupHandler = () => {
      setIsShownPopup(false);
    };

    useEffect(() => {
      const {current} = imageRef;
      current.addEventListener('mouseover', enablePopupHandler);
      current.addEventListener('mouseout', disablePopupHandler);

      return () => {
        current.removeEventListener('mouseover', enablePopupHandler);
        current.removeEventListener('mouseout', disablePopupHandler);
      };
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} imageRef={imageRef} isShownPopup={isShownPopup} />;
  };

  return WithPopupCard;
};

export default withPopupCard;
