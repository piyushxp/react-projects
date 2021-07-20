import React, { useState, useEffect } from 'react'
import { uuid } from 'shared/helper';

function useToastPortal() {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${uuid()}`);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    div.style = `position:fixed,top:10px,right:10px`;
    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);

    return () => document.getElementsByTagName("body")[0].removeChild();
  }, [portalId]);


  return {
    portalId, loaded
  }

}


export default useToastPortal
