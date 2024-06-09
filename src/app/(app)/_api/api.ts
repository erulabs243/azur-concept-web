import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

export const cms = await getPayloadHMR({ config: configPromise });
