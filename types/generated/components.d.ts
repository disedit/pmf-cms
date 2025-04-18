import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCountdown extends Struct.ComponentSchema {
  collectionName: 'components_blocks_countdowns';
  info: {
    description: '';
    displayName: 'Countdown';
    icon: 'hashtag';
  };
  attributes: {
    countdown_to: Schema.Attribute.DateTime & Schema.Attribute.Required;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'bulletList';
  };
  attributes: {
    items: Schema.Attribute.Component<'subblocks.faq-item', true>;
    picture: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_home_heroes';
  info: {
    description: '';
    displayName: 'Home Hero';
    icon: 'server';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'subblocks.marquee-block', true>;
    gap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    loop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    speed: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<2000>;
  };
}

export interface BlocksInfoBlocks extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'Info Blocks';
    icon: 'book';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'subblocks.info-block', true>;
  };
}

export interface BlocksPageHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_page_heroes';
  info: {
    displayName: 'Page Hero';
    icon: 'monitor';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String;
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
    blocks: Schema.Attribute.Component<'subblocks.ticket-card', true>;
  };
}

export interface FooterFooterLogos extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_logos';
  info: {
    displayName: 'Footer Logos';
    icon: 'heart';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    logos: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
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
      ['instagram', 'facebook', 'tiktok', 'x']
    > &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    page: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
  };
}

export interface SubblocksFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'cursor';
  };
  attributes: {};
}

export interface SubblocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_subblocks_info_blocks';
  info: {
    description: '';
    displayName: 'Info Block';
    icon: 'archive';
  };
  attributes: {
    heading: Schema.Attribute.String;
    inverted: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    picture: Schema.Attribute.Media<'images' | 'files'>;
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
    background: Schema.Attribute.Media<'files' | 'images'>;
    text: Schema.Attribute.Blocks;
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
      'blocks.countdown': BlocksCountdown;
      'blocks.faq': BlocksFaq;
      'blocks.home-hero': BlocksHomeHero;
      'blocks.info-blocks': BlocksInfoBlocks;
      'blocks.page-hero': BlocksPageHero;
      'blocks.ticket-block': BlocksTicketBlock;
      'footer.footer-logos': FooterFooterLogos;
      'global.socials': GlobalSocials;
      'menu.menu-item': MenuMenuItem;
      'subblocks.faq-item': SubblocksFaqItem;
      'subblocks.info-block': SubblocksInfoBlock;
      'subblocks.marquee-block': SubblocksMarqueeBlock;
      'subblocks.ticket-card': SubblocksTicketCard;
    }
  }
}
