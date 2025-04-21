import { Example } from "@cloudcraft/core/example";
import { Resource } from "sst";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
