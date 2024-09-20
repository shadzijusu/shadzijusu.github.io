import { AngularIcon } from "../icons/angular-icon";
import { AzureIcon } from "../icons/azure-icon";
import { CSharpIcon } from "../icons/csharp-icon";
import { CssIcon } from "../icons/css-icon";
import { GitIcon } from "../icons/git-icon";
import { GraphQLIcon } from "../icons/graphql-icon";
import { HtmlIcon } from "../icons/html-icon";
import { JavaScriptIcon } from "../icons/javascript-icon";
import { MsOfficeIcon } from "../icons/ms-office-icon";
import { NodeJsIcon } from "../icons/node-js-icon";
import { ReactIcon } from "../icons/react-icon";
import { ReactNativeIcon } from "../icons/react-native-icon";
import { TailwindIcon } from "../icons/tailwind-icon";
import { TypeScriptIcon } from "../icons/typescript-icon";

export default function Skills() {
  return (
    <div className="py-16 bg-[#25202F] text-white">
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl w-full border-b pb-6 border-[#7E7F86]">
          Skills
        </h1>

        <h2 className="text-2xl mt-12 mb-4">Technical skills</h2>

        <div className="flex flex-row gap-6 items-center">
          <h2 className="text-xl font-light">Frontend</h2>
          <AngularIcon />
          <ReactIcon />
          <ReactNativeIcon />
          <HtmlIcon />
          <CssIcon />
          <TailwindIcon />
          <JavaScriptIcon />
          <TypeScriptIcon />
        </div>

        <div className="flex flex-row gap-6 mt-6 items-center">
          <h2 className="text-xl font-light">Backend</h2>
          <CSharpIcon />
          <NodeJsIcon />
          <GraphQLIcon />
        </div>

        <div className="flex flex-row gap-6 mt-6 items-center">
          <h2 className="text-xl font-light">Tools</h2>
          <GitIcon />
          <AzureIcon />
          <MsOfficeIcon />
        </div>

        <div className="flex flex-row gap-6 mt-6 items-center">
          <h2 className="text-xl font-light">Methodologies</h2>
          <p className="text-lg">Agile, Scrum</p>
        </div>

        <h2 className="text-2xl mt-12">Soft skills</h2>
        <p className="text-xl font-light mt-2">
          Teamwork, communication, problem-solving
        </p>

        <h2 className="text-2xl mt-12">Languages</h2>
        <div className="flex flex-row gap-6 mt-6 items-center">
          <h2 className="text-xl font-semibold">Bosnian, English</h2>
          <p className="text-lg">Fluent in written and spoken</p>
        </div>
        <div className="flex flex-row gap-6 mt-6 items-center">
          <h2 className="text-xl font-semibold">German</h2>
          <p className="text-lg">Elementary proficiency</p>
        </div>
      </div>
    </div>
  );
}
