import { useState } from "preact/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "preact-router";
import { RiPictureInPictureExitFill, RiFullscreenFill } from "react-icons/ri"

export function IframeHeader(props: { url: string }) {
    const { t } = useTranslation()
    const [showPopout, setShowPopout] = useState(false);
    const [showFullScreen, setFullScreen] = useState(false);
    if (showPopout) {
        window.location.replace(props.url);
    }
    if (showFullScreen) {
        document.getElementById("iframe").requestFullscreen();
        setFullScreen(false);
    }
    return (
        <div id="iframeNav" className="flex h-16 flex-row items-center justify-between bg-navbar-color px-4">
            <Link href="/" class="w-1/2">
                <div className="flex flex-row items-center">
                    <img src="/logo.png" className="h-16 w-16 transition-all duration-1000 hover:rotate-[360deg]"></img>
                    <h1 className="font-roboto text-2xl font-bold text-navbar-text-color md:text-4xl"> {t("header.title")} </h1>
                </div>
            </Link>
            <div id="navItems" class="w-1/2"> 
                <div className="flex flex-row items-center justify-end gap-3 mr-4">
                    <RiPictureInPictureExitFill className="h-6 w-6 cursor-pointer transition-all duration-0500 text-navbar-text-color hover:scale-110 hover:brightness-125" onClick={() => setShowPopout(true)} />
                    <RiFullscreenFill className="h-6 w-6 cursor-pointer transition-all duration-0500 text-navbar-text-color hover:scale-110 hover:brightness-125 active:rotate-90" onClick={() => setFullScreen(true)} />
                </div>
            </div>
        </div>
    )
};
