declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"project": {
"algorithm-visualiser.mdx": {
  id: "algorithm-visualiser.mdx",
  slug: "algorithm-visualiser",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"anyrep.mdx": {
  id: "anyrep.mdx",
  slug: "anyrep",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"cover-maker.mdx": {
  id: "cover-maker.mdx",
  slug: "cover-maker",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"exodia-fitness-app.mdx": {
  id: "exodia-fitness-app.mdx",
  slug: "exodia-fitness-app",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"exodia-fitness-website.mdx": {
  id: "exodia-fitness-website.mdx",
  slug: "exodia-fitness-website",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"lucid.mdx": {
  id: "lucid.mdx",
  slug: "lucid",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"melodymelon.mdx": {
  id: "melodymelon.mdx",
  slug: "melodymelon",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"static-site-generator.mdx": {
  id: "static-site-generator.mdx",
  slug: "static-site-generator",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
