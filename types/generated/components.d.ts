import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksArchive extends Struct.ComponentSchema {
  collectionName: 'components_blocks_archives';
  info: {
    description: '';
    displayName: 'Archive';
    icon: 'archive';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    posters: Schema.Attribute.Component<'subblocks.poster', true>;
    side_title: Schema.Attribute.String;
  };
}

export interface BlocksCountdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_countdowns';
  info: {
    description: '';
    displayName: 'Countdown';
    icon: 'hashtag';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    countdown_to: Schema.Attribute.DateTime & Schema.Attribute.Required;
    heading: Schema.Attribute.String;
    side_title: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    items: Schema.Attribute.Component<'subblocks.faq-item', true>;
    picture: Schema.Attribute.Media<'images' | 'videos'>;
    side_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_grids';
  info: {
    description: '';
    displayName: 'Grid';
    icon: 'apps';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    concerts: Schema.Attribute.Relation<'oneToMany', 'api::concert.concert'>;
    filters: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    side_title: Schema.Attribute.String;
  };
}

export interface BlocksHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_heroes';
  info: {
    description: '';
    displayName: 'Marquee Scroller';
    icon: 'server';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    blocks: Schema.Attribute.Component<'subblocks.marquee-block', true>;
    gap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    side_title: Schema.Attribute.String;
    speed: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<0.5>;
  };
}

export interface BlocksInfoBlocks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    description: '';
    displayName: 'Info Blocks';
    icon: 'book';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    blocks: Schema.Attribute.Component<'subblocks.info-block', true>;
    side_title: Schema.Attribute.String;
  };
}

export interface BlocksPageHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_page_heroes';
  info: {
    description: '';
    displayName: 'Page Header';
    icon: 'monitor';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    background: Schema.Attribute.Media<'images' | 'videos'>;
    overlay: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    side_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPosters extends Struct.ComponentSchema {
  collectionName: 'components_blocks_posters';
  info: {
    description: '';
    displayName: 'Posters';
    icon: 'landscape';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    posters: Schema.Attribute.Media<'images' | 'files', true>;
    side_title: Schema.Attribute.String;
  };
}

export interface BlocksSpacer extends Struct.ComponentSchema {
  collectionName: 'components_blocks_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'arrowDown';
  };
  attributes: {
    height: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1rem'>;
  };
}

export interface BlocksTicketBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ticket_blocks';
  info: {
    description: '';
    displayName: 'Ticket Blocks';
    icon: 'dashboard';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    blocks: Schema.Attribute.Component<'subblocks.ticket-card', true>;
    side_title: Schema.Attribute.String;
  };
}

export interface FooterFooterLogos extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logos';
  info: {
    description: '';
    displayName: 'Footer Logos';
    icon: 'heart';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface GlobalSocials extends Struct.ComponentSchema {
  collectionName: 'components_global_socials';
  info: {
    description: '';
    displayName: 'Social Link';
    icon: 'attachment';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['instagram', 'facebook-f', 'tiktok', 'x']
    > &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    description: '';
    displayName: 'Menu Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface MetaSeo extends Struct.ComponentSchema {
  collectionName: 'components_meta_seos';
  info: {
    description: '';
    displayName: 'SEO';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SubblocksFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_faq_items';
  info: {
    description: '';
    displayName: 'FAQ Item';
    icon: 'cursor';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SubblocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_info_blocks';
  info: {
    description: '';
    displayName: 'Info Block';
    icon: 'archive';
  };
  attributes: {
    anchor_id: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    inverted: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    picture: Schema.Attribute.Media<'images' | 'videos'>;
    text: Schema.Attribute.Blocks;
  };
}

export interface SubblocksMarqueeBlock extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_marquee_blocks';
  info: {
    description: '';
    displayName: 'Hero Block';
    icon: 'dashboard';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
  };
}

export interface SubblocksPoster extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_posters';
  info: {
    description: '';
    displayName: 'Poster';
    icon: 'file';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SubblocksTicketCard extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_ticket_cards';
  info: {
    description: '';
    displayName: 'Ticket Block';
    icon: 'cursor';
  };
  attributes: {
    button_label: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.archive': BlocksArchive;
      'blocks.countdown': BlocksCountdown;
      'blocks.faq': BlocksFaq;
      'blocks.grid': BlocksGrid;
      'blocks.home-hero': BlocksHomeHero;
      'blocks.info-blocks': BlocksInfoBlocks;
      'blocks.page-hero': BlocksPageHero;
      'blocks.posters': BlocksPosters;
      'blocks.spacer': BlocksSpacer;
      'blocks.ticket-block': BlocksTicketBlock;
      'footer.footer-logos': FooterFooterLogos;
      'global.socials': GlobalSocials;
      'menu.menu-item': MenuMenuItem;
      'meta.seo': MetaSeo;
      'subblocks.faq-item': SubblocksFaqItem;
      'subblocks.info-block': SubblocksInfoBlock;
      'subblocks.marquee-block': SubblocksMarqueeBlock;
      'subblocks.poster': SubblocksPoster;
      'subblocks.ticket-card': SubblocksTicketCard;
    }
  }
}
