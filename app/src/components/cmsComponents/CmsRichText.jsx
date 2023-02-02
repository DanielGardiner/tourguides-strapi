import ReactMarkdown from "react-markdown";

export default function CmsRichText({ component }) {
  return (
    <ReactMarkdown className="reactMarkdown">{component.Rich_Text}</ReactMarkdown>
  )
}
