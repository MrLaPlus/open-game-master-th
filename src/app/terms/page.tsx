
import { Tr as _I18nText } from "@/lib/i18n/ui-language";
import Link from "next/link";
import { PIXEL_ICONS } from "@/lib/ui";
import { PageSection, PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Terms of Service | Open Game Master",
};

export default function TermsPage() {
  return (
    <PageShell
      icon={PIXEL_ICONS.story}
      glyph="ui-terms"
      title="Terms of service"
      blurb="What the software is, what it is not, and who is responsible for what."
      actions={
        <Link href="/" className="text-sm text-amber-200 hover:text-amber-100"><_I18nText>{"Back to Open Game Master"}</_I18nText></Link>
      }
    >
      <PageSection bodyClassName="space-y-4">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"Open Game Master is open source (MIT licensed), self-hosted software. There is no hosted service to sign up for, no company behind it, and no account with the project itself. You download the code and run it on hardware you control. These terms explain what the software is, what it is not, and who is responsible for what."}</_I18nText></p>
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"By installing, running, or playing on an install of Open Game Master, you accept these terms. If you do not accept them, do not use the software."}</_I18nText></p>
      </PageSection>

      <PageSection heading="Who these terms are between">
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-400">
          <li>
            <span className="text-stone-200"><_I18nText>{"If you run the server."}</_I18nText></span>{" "}<_I18nText>{"Your relationship with this project is the"}</_I18nText>{" "}
            <a
              href="https://github.com/Lebbitheplow/open-game-master/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 hover:text-amber-400"
            ><_I18nText>{"MIT license"}</_I18nText></a>{" "}<_I18nText>{"and nothing more. You are free to use, modify, and redistribute the code under that license, and the software comes with no warranty of any kind."}</_I18nText></li>
          <li>
            <span className="text-stone-200"><_I18nText>{"If you play on someone else's server."}</_I18nText></span>{" "}<_I18nText>{"The person or group operating that server is who you are actually dealing with. They control the accounts, the data, the rules of the table, and whether the server keeps running. The creator of Open Game Master is not a party to that arrangement, has no access to that server, and cannot moderate, recover, or delete anything on it."}</_I18nText></li>
        </ul>
      </PageSection>

      <PageSection heading="No service, no support, no uptime">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"Nothing here is a subscription or a hosted product. There is no service level, no guaranteed availability, no support desk, and no promise that future versions will keep any particular feature, remain compatible with your data, or be released at all. The project may change or stop at any time."}</_I18nText></p>
      </PageSection>

      <PageSection heading="If you run a server">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"Running an install makes you the operator, and the obligations that would normally fall on a service provider fall on you:"}</_I18nText></p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-400">
          <li><_I18nText>{"Comply with the laws that apply where you and your players are. That includes data protection law, which generally treats you, not this project, as the controller of everything your players store."}</_I18nText></li>
          <li><_I18nText>{"Secure the server: strong credentials, current software, access control, and TLS if it is reachable from the internet. Anyone with access to the database has access to every campaign, character, and uploaded file in it."}</_I18nText></li>
          <li><_I18nText>{"Set the rules for your table, including any age limit, and be responsible for what happens on your server. You decide who gets an account and who keeps it."}</_I18nText></li>
          <li><_I18nText>{"Tell your players which optional integrations you have enabled, since those send data off your machine. See the"}</_I18nText>{" "}
            <Link href="/privacy" className="text-amber-200 hover:text-amber-400"><_I18nText>{"privacy policy"}</_I18nText></Link>{" "}<_I18nText>{"for what those are."}</_I18nText></li>
          <li><_I18nText>{"Keep your own backups. Campaign data lives only on your server, and a lost disk or a bug means a lost campaign."}</_I18nText></li>
          <li><_I18nText>{"If you open your server to people beyond friends, publish your own terms and privacy notice. This page describes the software; it cannot speak for how you run it."}</_I18nText></li>
        </ul>
      </PageSection>

      <PageSection heading="Acceptable use">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"Whether you are the operator or a player, do not use Open Game Master to:"}</_I18nText></p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-400">
          <li><_I18nText>{"break the law, or to create, store, or share material that is illegal where you are;"}</_I18nText></li>
          <li><_I18nText>{"produce sexual content involving minors, or sexual or abusive depictions of real people who have not consented;"}</_I18nText></li>
          <li><_I18nText>{"harass, threaten, defame, or impersonate other players or anyone else;"}</_I18nText></li>
          <li><_I18nText>{"upload or generate material you have no right to use, including copyrighted rulebooks, art, or audio;"}</_I18nText></li>
          <li><_I18nText>{"attack the install or the people on it: bypassing access controls, reading other players' private content, taking over accounts, or disrupting sessions."}</_I18nText></li>
        </ul>
        <p className="mt-3 text-sm leading-6 text-stone-400"><_I18nText>{"If something at the table breaks these rules, whether a player wrote it or the AI Game Master generated it, report it from the message or the party list. Reports go to the admins of the server you are on, who can mute, remove, or delete accounts, and you can block a player yourself at any time. Because the app has no central service, there is no one else to report to."}</_I18nText></p>
        <p className="mt-3 text-sm leading-6 text-stone-400"><_I18nText>{"Your operator may add rules of their own, and those apply too. An operator may suspend or remove any account on their server at their discretion."}</_I18nText></p>
      </PageSection>

      <PageSection heading="AI generated content">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"The Game Master is a language model. Its narration is fiction produced by software, and it can be wrong, inconsistent, unfair, or upsetting. It is not advice of any kind, and nothing it says should be relied on outside the game."}</_I18nText></p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-stone-400">
          <li><_I18nText>{"What the model produces depends on the model your operator chose, its settings, and what players type. This project applies no content filter that could guarantee any particular output, and makes no promise about what a model will say."}</_I18nText></li>
          <li><_I18nText>{"Generated text, images, and audio are not guaranteed to be original or free of other people's rights. Who owns model output, if anyone, is unsettled in many places, and this project makes no claim either way."}</_I18nText></li>
          <li><_I18nText>{"Agree on the limits for your table before you play, and treat the AI GM as a tool the table steers rather than an authority."}</_I18nText></li>
        </ul>
      </PageSection>

      <PageSection heading="Optional third-party services">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"By default everything runs on your own hardware. An operator can enable integrations that reach outside it, for example Discord sign-in, a hosted OpenAI-compatible model provider, or content and audio downloaded from public archives. When one of those is enabled, that provider's own terms and privacy policy govern the data it receives, and the operator is responsible for their own accounts, API keys, and the costs those run up."}</_I18nText></p>
      </PageSection>

      <PageSection heading="Game content and trademarks">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"The code is MIT licensed. The bundled rules data derives from the System Reference Document 5.1 by Wizards of the Coast LLC, licensed under Creative Commons Attribution 4.0. Content packs an operator imports carry their own licenses. Full attribution is on the"}</_I18nText>{" "}
          <Link href="/licenses" className="text-amber-200 hover:text-amber-400"><_I18nText>{"licenses page"}</_I18nText></Link>
          .
        </p>
        <p className="mt-3 text-sm leading-6 text-stone-400"><_I18nText>{"This project is not affiliated with, endorsed by, or sponsored by Wizards of the Coast. Dungeons & Dragons and D&D are trademarks of Wizards of the Coast LLC. No official published material ships with the software, and you should not upload material you do not have the right to use."}</_I18nText></p>
      </PageSection>

      <PageSection heading="Your content">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"You keep whatever rights you already have in what you write and upload. It is stored in your operator's database and nowhere else. This project takes no license in it, never receives a copy, and cannot retrieve or erase it for you. Requests to delete or export your data go to your operator."}</_I18nText></p>
      </PageSection>

      <PageSection heading="No warranty and no liability">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"As stated in the MIT license, the software is provided \"as is\", without warranty of any kind, express or implied, including the warranties of merchantability, fitness for a particular purpose, and noninfringement. To the fullest extent the law allows, the authors and copyright holders are not liable for any claim, damages, or other liability arising from the software or its use, including lost campaigns, lost data, downtime, or anything a model generates."}</_I18nText></p>
        <p className="mt-3 text-sm leading-6 text-stone-400"><_I18nText>{"Some jurisdictions do not allow certain disclaimers to be excluded. Where that is the case, the exclusions above apply only as far as that law permits."}</_I18nText></p>
      </PageSection>

      <PageSection heading="Stopping">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"You can stop using the software at any time, delete your account and content from within the app, or delete the whole database from your server. An operator can shut a server down at any time, with or without notice, and the campaigns on it go with it."}</_I18nText></p>
      </PageSection>

      <PageSection heading="Changes to these terms">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"These terms are part of the open source project and change only when the code changes. Each release carries the version of these terms that shipped with it, and you can review the current text and its full history in the project repository. If a part of these terms is unenforceable where you live, the rest still stands."}</_I18nText></p>
        <p className="mt-3 text-sm leading-6 text-stone-400"><_I18nText>{"This page is written in plain language and is not legal advice. If you run a public or commercial server, get advice that fits your situation."}</_I18nText></p>
      </PageSection>

      <PageSection heading="Contact">
        <p className="text-sm leading-6 text-stone-400"><_I18nText>{"There is no company behind this project. Questions about the software, including license and security reports, belong in the project repository or with"}</_I18nText>{" "}
          <a
            href="mailto:lebbitheplow@proton.me"
            className="text-amber-200 hover:text-amber-400"
          ><_I18nText>{"lebbitheplow@proton.me"}</_I18nText></a><_I18nText>{". Questions about a specific server belong to whoever runs it."}</_I18nText></p>
        <p className="mt-2 text-sm leading-6">
          <a
            href="https://github.com/Lebbitheplow/open-game-master"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-200 hover:text-amber-400"
          ><_I18nText>{"github.com/Lebbitheplow/open-game-master"}</_I18nText></a>
        </p>
      </PageSection>
    </PageShell>
  );
}
