import { motion } from "framer-motion";
import {
    Github,
    Slack,
    Trello,
    Figma,
    Database,
    Cloud,
    Zap,
    Plug,
    Workflow,
    ShieldCheck,
    Gauge,
    MousePointerClick
} from "lucide-react";

const IntegrationsSection = () => {
    const integrations = [
        { icon: Github, label: "GitHub" },
        { icon: Slack, label: "Slack" },
        { icon: Trello, label: "Trello" },
        { icon: Figma, label: "Figma" },
        { icon: Database, label: "Database" },
        { icon: Cloud, label: "Cloud" },
    ];

    const features = [
        { icon: Workflow, label: "Instant sync" },
        { icon: ShieldCheck, label: "Enterprise security" },
        { icon: Gauge, label: "Real-time updates" },
        { icon: MousePointerClick, label: "One-click setup" },
    ];

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-flex items-center gap-1 rounded-full bg-lime-400/10 px-3 py-1.5 text-xs text-lime-300 ring-1 ring-lime-300/20 uppercase tracking-tight">
                        <Plug className="h-3.5 w-3.5" />
                        Integrations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4">
                        Connect your entire tech stack
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
                        One platform, infinite possibilities. Sync with all your favorite tools.
                    </p>
                </motion.div>

                <div className="relative mx-auto mt-12 max-w-4xl">
                    {/* Integration Icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center justify-center gap-6 sm:gap-10"
                    >
                        {integrations.map((integration, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.2 + index * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                            >
                                <integration.icon className="h-5 w-5 text-white" />
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Animated Connection Lines */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative mt-6 h-64"
                    >
                        <svg viewBox="0 0 900 360" className="absolute inset-0 w-full h-full" fill="none">
                            <defs>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Connection dots */}
                            {[150, 270, 390, 510, 630, 750].map((cx, index) => (
                                <circle key={index} cx={cx} cy="30" r="4" fill="#A3E635" filter="url(#glow)">
                                    <animate
                                        attributeName="opacity"
                                        values="0.5;1;0.5"
                                        dur="2s"
                                        begin={`${index * 0.2}s`}
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            ))}

                            {/* Connection paths */}
                            {[
                                { d: "M450 300 C 450 200, 300 120, 150 30", offset: 600, delay: "0s" },
                                { d: "M450 300 C 450 210, 360 130, 270 30", offset: 520, delay: "0.2s" },
                                { d: "M450 300 C 450 150, 420 80, 390 30", offset: 450, delay: "0.4s" },
                                { d: "M450 300 C 450 150, 480 80, 510 30", offset: 450, delay: "0.6s" },
                                { d: "M450 300 C 450 210, 540 130, 630 30", offset: 520, delay: "0.8s" },
                                { d: "M450 300 C 450 200, 600 120, 750 30", offset: 600, delay: "1s" },
                            ].map((path, index) => (
                                <path
                                    key={index}
                                    d={path.d}
                                    stroke="#A3E635"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    fill="none"
                                    strokeDasharray={path.offset}
                                    strokeDashoffset={path.offset}
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        values={`${path.offset};0;${path.offset}`}
                                        dur="3s"
                                        begin={path.delay}
                                        repeatCount="indefinite"
                                    />
                                </path>
                            ))}
                        </svg>

                        {/* Central hub icon */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                            <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/20 ring-2 ring-lime-300/40"
                                style={{ boxShadow: "0 0 20px rgba(163,230,53,0.6), 0 0 40px rgba(163,230,53,0.3)" }}
                            >
                                <Zap className="h-6 w-6 text-lime-300" />
                            </motion.span>
                        </div>
                    </motion.div>
                </div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mx-auto mt-12 max-w-4xl"
                >
                    <div className="flex items-center justify-center gap-3 flex-wrap text-sm">
                        {features.map((feature, index) => (
                            <>
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                    className="inline-flex items-center gap-2"
                                >
                                    <feature.icon className="h-4 w-4 text-lime-300" />
                                    <span className="font-medium">{feature.label}</span>
                                </motion.div>
                                {index < features.length - 1 && (
                                    <div className="hidden sm:block w-24 h-px border-t border-dashed border-lime-300/40" />
                                )}
                            </>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationsSection;
