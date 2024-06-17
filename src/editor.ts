import { createHeadlessEditor } from "@lexical/headless";
import {
	defaultEditorConfig,
	defaultEditorFeatures,
	getEnabledNodes,
	sanitizeServerEditorConfig,
} from "@payloadcms/richtext-lexical";
import { sanitizeConfig, type Config } from "payload/config";

const editorConfig = defaultEditorConfig;

editorConfig.features = [...defaultEditorFeatures];

const config = await sanitizeConfig({} as Config);

const headlessEditor = createHeadlessEditor({
	nodes: getEnabledNodes({
		editorConfig: await sanitizeServerEditorConfig(editorConfig, config),
	}),
});
