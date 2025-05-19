
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

const ProjectCard = ({ title, description, imageUrl, link }: ProjectCardProps) => {
  const cardContent = (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="p-2 flex-grow">
        {imageUrl ? (
          <img className="w-full h-48 object-cover object-center mb-2" src={imageUrl} alt={title} />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-2">
            <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14v6m-3-3h6M6.5 10h.01M12.5 10h.01M18.5 10h.01M20 4v3m-3-3h3M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      {link && (
        <div className="px-2 pb-4">
          <Link
            to={link}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded transition-colors"
          >
            Go somewhere
          </Link>
        </div>
      )}
    </div>
  );

  return cardContent;
};

export default ProjectCard;
