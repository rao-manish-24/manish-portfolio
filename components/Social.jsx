import Link from 'next/link';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      <a 
        href="https://github.com/rao-manish-24" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconStyles} hover:text-accent transition-all duration-300`}
      >
        <RiGithubFill />
      </a>
      <a 
        href="https://www.linkedin.com/in/raomanish9538/" 
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconStyles} hover:text-accent transition-all duration-300`}
      >
        <RiLinkedinFill />
      </a>
    </div>
  );
};

export default Social; 