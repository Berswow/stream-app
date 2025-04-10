import {Dialog, DialogContent} from "@/components/ui/dialog";
import {motion, AnimatePresence} from "framer-motion";

interface TrailerModalProps {
    trailerKey: string | null;
    isOpen: boolean;
    onClose: () => void;
}

export const TrailerModal = ({trailerKey, isOpen, onClose}: TrailerModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog open={isOpen} onOpenChange={onClose}>
                    <DialogContent
                        className="p-0 bg-transparent border-none max-w-5xl w-full"
                        onPointerDownOutside={onClose}
                    >
                        <motion.div
                            initial={{opacity: 0, y: 40}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 40}}
                            transition={{duration: 0.3}}
                            className="relative w-full aspect-video"
                        >
                            {trailerKey ? (
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                                    title="YouTube trailer"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div
                                    className="w-full h-full bg-black rounded-xl flex items-center justify-center text-white">
                                    Трейлер не найден
                                </div>
                            )}
                        </motion.div>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    );
};
