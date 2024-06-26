/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    services: Service;
    serviceCategories: ServiceCategory;
    posts: Post;
    postCategories: PostCategory;
    profile: Profile;
    customers: Customer;
    projects: Project;
    reviews: Review;
    faq: Faq;
    messages: Message;
    pages: Page;
    covers: Cover;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    configuration: Configuration;
  };
  locale: 'en' | 'fr';
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdBy: string | User;
  icon?: string | Media | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "serviceCategories".
 */
export interface ServiceCategory {
  id: string;
  title: string;
  subtitle?: string | null;
  description: string;
  services?: (string | Service)[] | null;
  cover?: string | Media | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  cover?: string | Media | null;
  excerpt: string;
  categories?: (string | PostCategory)[] | null;
  related?: (string | Post)[] | null;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content_html?: string | null;
  slug: string;
  publishedOn?: string | null;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "postCategories".
 */
export interface PostCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "profile".
 */
export interface Profile {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    avatar?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers".
 */
export interface Customer {
  id: string;
  name: string;
  twitter?: string | null;
  website?: string | null;
  avatar?: string | Profile | null;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  name: string;
  website?: string | null;
  description: string;
  logo?: string | Profile | null;
  startDate?: string | null;
  endDate?: string | null;
  customer?: (string | null) | Customer;
  screenshots?:
    | {
        image?: string | Media | null;
        id?: string | null;
      }[]
    | null;
  slug: string;
  createdBy: string | User;
  publishedOn?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "reviews".
 */
export interface Review {
  id: string;
  customer: string | Customer;
  project?: (string | null) | Project;
  service?: (string | null) | Service;
  rating: number;
  review: string;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faq".
 */
export interface Faq {
  id: string;
  question: string;
  response: string;
  service?: (string | Service)[] | null;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Message {
  id: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  subject: string;
  message: string;
  read?: boolean | null;
  readtAt?: string | null;
  messageType: 'career' | 'help' | 'work';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  withLink?: boolean | null;
  heroTag?: string | null;
  heading: string;
  description?: string | null;
  layout?: Statistics[] | null;
  slug: string;
  publishedOn?: string | null;
  createdBy: string | User;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Statistics".
 */
export interface Statistics {
  statTitle: string;
  statValue: number;
  statDescription?: string | null;
  statType: 'percent' | 'raw';
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'statistics';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "covers".
 */
export interface Cover {
  id: string;
  page: 'home' | 'service' | 'about' | 'contact' | 'blog' | 'portfolio' | 'faq';
  heading: string;
  description: string;
  cover?: string | Media | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "configuration".
 */
export interface Configuration {
  id: string;
  site_name: string;
  slogan?: string | null;
  logo?: string | Media | null;
  logo_square?: string | Profile | null;
  phone_numbers?:
    | {
        phone?: string | null;
        id?: string | null;
      }[]
    | null;
  emails?:
    | {
        email?: string | null;
        id?: string | null;
      }[]
    | null;
  addresses?:
    | {
        address?: string | null;
        street?: string | null;
        city?: string | null;
        province?: string | null;
        country?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}