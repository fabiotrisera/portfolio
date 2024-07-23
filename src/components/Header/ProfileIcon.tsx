import { FaGithub, FaLinkedin } from "react-icons/fa";

function ProfileIcon({ icon, link }: { icon: "github" | "linkedin", link: string}) {
    const className = "size-8 hover:text-slate-600 dark:hover:text-slate-100";

    switch(icon) {
        case "github":
            return (
                <a title="github" href={link} target="_blank" rel="noreferrer noopener">
                    <FaGithub className={className} />
                </a>
            );
        case "linkedin":
            return (
                <a title="linkedin" href={link} target="_blank" rel="noreferrer noopener">
                    <FaLinkedin className={className} />
                </a>
            );
        default:
            throw new Error(`Invalid icon ${icon}`);   
    }
}

export default ProfileIcon;