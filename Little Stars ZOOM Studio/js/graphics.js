/* ==========================================================================
   2. SVG VECTOR GRAPHICS ENGINE
   Outputs clean SVG markup for zero-dependency visuals.
   ========================================================================== */

function getSVGGraphic(type, color = '#6c5ce7') {
    const svgHeader = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">`;
    const svgFooter = `</svg>`;

    switch (type) {
        case 'apple':
            return `${svgHeader}
                <path d="M50 22 C35 8, 15 25, 15 58 C15 82, 38 92, 50 92 C62 92, 85 82, 85 58 C85 25, 65 8, 50 22 Z" fill="#ff4d4d"/>
                <path d="M50 22 Q56 10 68 12" stroke="#27ae60" stroke-width="5" stroke-linecap="round" fill="none"/>
                <ellipse cx="68" cy="12" rx="10" ry="5" fill="#2ecc71" transform="rotate(-20 68 12)"/>
                <ellipse cx="32" cy="42" rx="5" ry="12" fill="#fff" opacity="0.35"/>
            ${svgFooter}`;

        case 'bear':
            return `${svgHeader}
                <circle cx="22" cy="22" r="16" fill="#8d6e63"/>
                <circle cx="22" cy="22" r="9" fill="#ffab91"/>
                <circle cx="78" cy="22" r="16" fill="#8d6e63"/>
                <circle cx="78" cy="22" r="9" fill="#ffab91"/>
                <circle cx="50" cy="55" r="36" fill="#8d6e63"/>
                <ellipse cx="50" cy="65" rx="20" ry="15" fill="#d7ccc8"/>
                <ellipse cx="50" cy="58" rx="8" ry="6" fill="#3e2723"/>
                <circle cx="36" cy="46" r="4.5" fill="#3e2723"/>
                <circle cx="64" cy="46" r="4.5" fill="#3e2723"/>
                <circle cx="38" cy="44" r="1.5" fill="#fff"/>
                <circle cx="66" cy="44" r="1.5" fill="#fff"/>
                <path d="M44 68 Q50 74 56 68" stroke="#3e2723" stroke-width="3" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'cat':
            return `${svgHeader}
                <!-- Orange Tabby Cat with pointed ears, cheeks, nose, whiskers, and cute mouth -->
                <!-- Ears -->
                <polygon points="18,12 38,42 12,42" fill="#ff793f"/>
                <polygon points="22,18 34,38 16,38" fill="#ffb8b8"/>
                <polygon points="82,12 62,42 88,42" fill="#ff793f"/>
                <polygon points="78,18 66,38 84,38" fill="#ffb8b8"/>
                <!-- Head -->
                <circle cx="50" cy="54" r="34" fill="#ff793f"/>
                <!-- White Muzzle -->
                <ellipse cx="50" cy="65" rx="16" ry="11" fill="#ffffff"/>
                <!-- Eyes with catchlight -->
                <ellipse cx="36" cy="48" rx="7" ry="9" fill="#2ecc71"/>
                <ellipse cx="64" cy="48" rx="7" ry="9" fill="#2ecc71"/>
                <circle cx="36" cy="48" r="4" fill="#2d3436"/>
                <circle cx="64" cy="48" r="4" fill="#2d3436"/>
                <circle cx="34" cy="45" r="2" fill="#fff"/>
                <circle cx="62" cy="45" r="2" fill="#fff"/>
                <!-- Pink Nose -->
                <polygon points="50,60 44,65 56,65" fill="#fd79a8"/>
                <!-- Cat Mouth -->
                <path d="M44 68 Q50 74 56 68" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                <!-- Whiskers -->
                <path d="M12 56 L32 58 M10 64 L32 63 M14 72 L34 68" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M88 56 L68 58 M90 64 L68 63 M86 72 L66 68" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'dog':
            return `${svgHeader}
                <ellipse cx="18" cy="45" rx="12" ry="28" fill="#795548"/>
                <ellipse cx="82" cy="45" rx="12" ry="28" fill="#795548"/>
                <circle cx="50" cy="50" r="34" fill="#f39c12"/>
                <ellipse cx="50" cy="62" rx="18" ry="14" fill="#fff8e1"/>
                <ellipse cx="50" cy="56" rx="8" ry="6" fill="#2c3e50"/>
                <circle cx="36" cy="44" r="4" fill="#2c3e50"/>
                <circle cx="64" cy="44" r="4" fill="#2c3e50"/>
                <path d="M46 64 Q50 72 54 64" stroke="#2c3e50" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M48 68 C48 78, 52 78, 52 68 Z" fill="#ff5252"/>
            ${svgFooter}`;

        case 'elephant':
            return `${svgHeader}
                <!-- Friendly Blue-Grey Elephant with giant ears, long curved trunk, white tusks, and smiling mouth -->
                <!-- Big Floppy Ears behind -->
                <circle cx="18" cy="45" r="22" fill="#a4b0be"/>
                <circle cx="18" cy="45" r="14" fill="#ffb8b8"/>
                <circle cx="82" cy="45" r="22" fill="#a4b0be"/>
                <circle cx="82" cy="45" r="14" fill="#ffb8b8"/>
                <!-- Main Head -->
                <circle cx="50" cy="48" r="32" fill="#747d8c"/>
                <!-- Cute Eyes -->
                <circle cx="36" cy="42" r="5" fill="#fff"/>
                <circle cx="64" cy="42" r="5" fill="#fff"/>
                <circle cx="36" cy="42" r="3" fill="#2d3436"/>
                <circle cx="64" cy="42" r="3" fill="#2d3436"/>
                <circle cx="34" cy="40" r="1.5" fill="#fff"/>
                <circle cx="62" cy="40" r="1.5" fill="#fff"/>
                <!-- Rosy Cheeks -->
                <circle cx="28" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                <circle cx="72" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                <!-- White Tusks -->
                <path d="M38 58 Q34 68 28 66 Q36 60 42 56 Z" fill="#ffffff"/>
                <path d="M62 58 Q66 68 72 66 Q64 60 58 56 Z" fill="#ffffff"/>
                <!-- Long Trumpeting Elephant Trunk in front -->
                <path d="M44 52 C44 78, 68 85, 68 68 C68 60, 58 64, 58 68" stroke="#747d8c" stroke-width="12" stroke-linecap="round" fill="none"/>
                <path d="M44 52 C44 78, 68 85, 68 68 C68 60, 58 64, 58 68" stroke="#57606f" stroke-width="2" stroke-linecap="round" fill="none"/>
                <!-- Water Sprinkles from trunk -->
                <circle cx="64" cy="52" r="3" fill="#70a1ff"/>
                <circle cx="74" cy="56" r="4" fill="#70a1ff"/>
            ${svgFooter}`;

        case 'fish':
            return `${svgHeader}
                <ellipse cx="44" cy="50" rx="34" ry="24" fill="#ff793f"/>
                <polygon points="75,50 96,30 96,70" fill="#ff793f"/>
                <path d="M35 27 C42 40, 42 60, 35 73" stroke="#fff" stroke-width="7" fill="none"/>
                <path d="M55 26 C62 40, 62 60, 55 74" stroke="#fff" stroke-width="7" fill="none"/>
                <circle cx="26" cy="42" r="6" fill="#fff"/>
                <circle cx="26" cy="42" r="3" fill="#000"/>
                <circle cx="27" cy="40" r="1" fill="#fff"/>
            ${svgFooter}`;

        case 'giraffe':
            return `${svgHeader}
                <rect x="40" y="32" width="20" height="58" rx="10" fill="#f1c40f"/>
                <circle cx="50" cy="28" r="20" fill="#f1c40f"/>
                <line x1="40" y1="10" x2="40" y2="20" stroke="#d63031" stroke-width="4"/>
                <line x1="60" y1="10" x2="60" y2="20" stroke="#d63031" stroke-width="4"/>
                <circle cx="40" cy="9" r="4" fill="#d63031"/>
                <circle cx="60" cy="9" r="4" fill="#d63031"/>
                <circle cx="42" cy="24" r="3.5" fill="#000"/>
                <circle cx="58" cy="24" r="3.5" fill="#000"/>
                <ellipse cx="50" cy="34" rx="12" ry="7" fill="#ffeaa7"/>
                <circle cx="44" cy="50" r="5" fill="#e67e22"/>
                <circle cx="56" cy="65" r="6" fill="#e67e22"/>
                <circle cx="46" cy="78" r="5" fill="#e67e22"/>
            ${svgFooter}`;

        case 'house':
            return `${svgHeader}
                <polygon points="50,10 8,46 92,46" fill="#ff5252"/>
                <rect x="18" y="46" width="64" height="46" fill="#ffeaa7"/>
                <rect x="42" y="60" width="16" height="32" fill="#795548"/>
                <circle cx="54" cy="76" r="2" fill="#f1c40f"/>
                <rect x="25" y="54" width="14" height="16" fill="#74b9ff" stroke="#fff" stroke-width="2"/>
                <rect x="61" y="54" width="14" height="16" fill="#74b9ff" stroke="#fff" stroke-width="2"/>
                <rect x="70" y="18" width="10" height="18" fill="#b2bec3"/>
            ${svgFooter}`;

        case 'icecream':
            return `${svgHeader}
                <polygon points="50,92 28,48 72,48" fill="#e17055"/>
                <path d="M28 48 L72 48" stroke="#d63031" stroke-width="2"/>
                <circle cx="50" cy="40" r="18" fill="#ff7675"/>
                <circle cx="38" cy="44" r="14" fill="#ffeaa7"/>
                <circle cx="62" cy="44" r="14" fill="#55efc4"/>
                <circle cx="50" cy="18" r="7" fill="#d63031"/>
                <path d="M50 11 Q54 6 60 8" stroke="#27ae60" stroke-width="3" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'jellyfish':
            return `${svgHeader}
                <path d="M18 48 C18 16, 82 16, 82 48 C82 55, 18 55, 18 48 Z" fill="#e84393"/>
                <circle cx="36" cy="36" r="4" fill="#fff"/>
                <circle cx="64" cy="36" r="4" fill="#fff"/>
                <circle cx="36" cy="36" r="2" fill="#000"/>
                <circle cx="64" cy="36" r="2" fill="#000"/>
                <path d="M26 55 Q20 75 28 92" stroke="#fd79a8" stroke-width="5" stroke-linecap="round" fill="none"/>
                <path d="M42 55 Q48 75 40 92" stroke="#ffeaa7" stroke-width="5" stroke-linecap="round" fill="none"/>
                <path d="M58 55 Q52 75 60 92" stroke="#74b9ff" stroke-width="5" stroke-linecap="round" fill="none"/>
                <path d="M74 55 Q80 75 72 92" stroke="#55efc4" stroke-width="5" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'kite':
            return `${svgHeader}
                <!-- Diamond Kite with colorful quadrants, tail, and ribbons -->
                <polygon points="50,10 85,45 50,88 15,45" fill="#ff7675"/>
                <polygon points="50,10 85,45 50,45" fill="#74b9ff"/>
                <polygon points="15,45 50,45 50,88" fill="#ffeaa7"/>
                <polygon points="50,45 85,45 50,88" fill="#55efc4"/>
                <line x1="50" y1="10" x2="50" y2="88" stroke="#fff" stroke-width="3"/>
                <line x1="15" y1="45" x2="85" y2="45" stroke="#fff" stroke-width="3"/>
                <!-- Bows on tail -->
                <path d="M50 88 Q65 92 52 98" stroke="#2d3436" stroke-width="2" fill="none"/>
                <polygon points="52,98 46,94 48,100" fill="#e84393"/>
                <polygon points="52,98 58,94 56,100" fill="#fdcb6e"/>
            ${svgFooter}`;

        case 'lion':
            return `${svgHeader}
                <!-- Instantly Recognizable King Lion with big golden mane rays, ears, yellow face, pink nose & smile -->
                <!-- Sunburst Golden Mane -->
                <g fill="#e67e22">
                    <circle cx="50" cy="14" r="12"/>
                    <circle cx="76" cy="22" r="12"/>
                    <circle cx="88" cy="46" r="12"/>
                    <circle cx="80" cy="72" r="12"/>
                    <circle cx="50" cy="86" r="12"/>
                    <circle cx="20" cy="72" r="12"/>
                    <circle cx="12" cy="46" r="12"/>
                    <circle cx="24" cy="22" r="12"/>
                </g>
                <!-- Inner Orange Mane ring -->
                <circle cx="50" cy="50" r="36" fill="#d35400"/>
                <!-- Ears sticking out -->
                <circle cx="28" cy="24" r="8" fill="#f1c40f"/>
                <circle cx="72" cy="24" r="8" fill="#f1c40f"/>
                <circle cx="28" cy="24" r="4" fill="#e67e22"/>
                <circle cx="72" cy="24" r="4" fill="#e67e22"/>
                <!-- Bright Yellow Face -->
                <circle cx="50" cy="52" r="28" fill="#f1c40f"/>
                <!-- Cream Muzzle -->
                <ellipse cx="50" cy="62" rx="14" ry="10" fill="#ffeaa7"/>
                <!-- Eyes & Highlights -->
                <circle cx="38" cy="44" r="4" fill="#2d3436"/>
                <circle cx="62" cy="44" r="4" fill="#2d3436"/>
                <circle cx="36" cy="42" r="1.5" fill="#fff"/>
                <circle cx="60" cy="42" r="1.5" fill="#fff"/>
                <!-- Dark Pink Triangle Nose -->
                <polygon points="50,56 44,62 56,62" fill="#d63031"/>
                <!-- Happy Smiling Mouth -->
                <path d="M44 65 Q50 72 56 65" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                <!-- Whiskers -->
                <line x1="26" y1="58" x2="36" y2="60" stroke="#2d3436" stroke-width="2"/>
                <line x1="74" y1="58" x2="64" y2="60" stroke="#2d3436" stroke-width="2"/>
            ${svgFooter}`;

        case 'moon':
            return `${svgHeader}
                <!-- Crescent Moon with sleeping cute face and stars -->
                <path d="M60 12 A38 38 0 1 0 88 68 A30 30 0 1 1 60 12 Z" fill="#f1c40f"/>
                <!-- Sleeping eye -->
                <path d="M38 52 Q44 58 50 52" stroke="#d35400" stroke-width="3" stroke-linecap="round" fill="none"/>
                <!-- Rosy cheek -->
                <circle cx="36" cy="58" r="4" fill="#ff7675" opacity="0.6"/>
                <!-- Night Sparkle Stars -->
                <polygon points="78,20 81,26 87,27 82,31 84,37 78,34 72,37 74,31 69,27 75,26" fill="#ffeaa7"/>
                <polygon points="20,20 22,24 26,25 23,28 24,32 20,30 16,32 17,28 14,25 18,24" fill="#ffeaa7"/>
            ${svgFooter}`;

        case 'nest':
            return `${svgHeader}
                <!-- Nest with 3 pastel eggs and twigs -->
                <ellipse cx="34" cy="42" rx="9" ry="14" fill="#74b9ff"/>
                <ellipse cx="50" cy="38" rx="10" ry="15" fill="#fd79a8"/>
                <ellipse cx="66" cy="42" rx="9" ry="14" fill="#55efc4"/>
                <!-- Eggs polka dots -->
                <circle cx="34" cy="40" r="1.5" fill="#fff"/>
                <circle cx="50" cy="36" r="2" fill="#fff"/>
                <circle cx="66" cy="44" r="1.5" fill="#fff"/>
                <!-- Woven Bowl -->
                <path d="M12 48 C12 82, 88 82, 88 48 C78 90, 22 90, 12 48 Z" fill="#795548"/>
                <path d="M16 54 Q50 68 84 54 M20 64 Q50 78 80 64" stroke="#5d4037" stroke-width="3" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'owl':
            return `${svgHeader}
                <!-- Purple Owl with big glossy eyes and feather tummy -->
                <ellipse cx="50" cy="55" rx="32" ry="36" fill="#6c5ce7"/>
                <!-- Ears -->
                <polygon points="22,28 32,18 36,32" fill="#5f27cd"/>
                <polygon points="78,28 68,18 64,32" fill="#5f27cd"/>
                <!-- White eye patches -->
                <circle cx="36" cy="42" r="13" fill="#fff"/>
                <circle cx="64" cy="42" r="13" fill="#fff"/>
                <circle cx="36" cy="42" r="6" fill="#2d3436"/>
                <circle cx="64" cy="42" r="6" fill="#2d3436"/>
                <circle cx="34" cy="40" r="2" fill="#fff"/>
                <circle cx="62" cy="40" r="2" fill="#fff"/>
                <!-- Beak -->
                <polygon points="50,46 44,54 56,54" fill="#e17055"/>
                <!-- Tummy scalloped feathers -->
                <path d="M38 68 Q44 74 50 68 Q56 74 62 68 M44 76 Q50 82 56 76" stroke="#a29bfe" stroke-width="3" fill="none"/>
            ${svgFooter}`;

        case 'penguin':
            return `${svgHeader}
                <!-- Penguin in black tuxedo with orange beak & feet -->
                <ellipse cx="50" cy="54" rx="30" ry="38" fill="#2d3436"/>
                <!-- White belly -->
                <ellipse cx="50" cy="60" rx="20" ry="28" fill="#ffffff"/>
                <!-- Wings -->
                <ellipse cx="18" cy="56" rx="8" ry="20" fill="#2d3436" transform="rotate(15 18 56)"/>
                <ellipse cx="82" cy="56" rx="8" ry="20" fill="#2d3436" transform="rotate(-15 82 56)"/>
                <!-- Eyes -->
                <circle cx="40" cy="36" r="4" fill="#2d3436"/>
                <circle cx="60" cy="36" r="4" fill="#2d3436"/>
                <circle cx="39" cy="34" r="1.5" fill="#fff"/>
                <circle cx="59" cy="34" r="1.5" fill="#fff"/>
                <!-- Beak -->
                <polygon points="50,40 42,48 58,48" fill="#ff7675"/>
                <!-- Feet -->
                <ellipse cx="38" cy="90" rx="10" ry="5" fill="#e17055"/>
                <ellipse cx="62" cy="90" rx="10" ry="5" fill="#e17055"/>
            ${svgFooter}`;

        case 'queen':
            return `${svgHeader}
                <!-- Sparkly Golden Crown with gems -->
                <polygon points="12,72 18,22 36,48 50,15 64,48 82,22 88,72" fill="#f1c40f"/>
                <rect x="12" y="72" width="76" height="14" rx="4" fill="#e67e22"/>
                <!-- Jewels on tips -->
                <circle cx="18" cy="20" r="5" fill="#e84393"/>
                <circle cx="50" cy="13" r="6" fill="#0984e3"/>
                <circle cx="82" cy="20" r="5" fill="#e84393"/>
                <!-- Jewels on band -->
                <circle cx="28" cy="79" r="4" fill="#55efc4"/>
                <circle cx="50" cy="79" r="4" fill="#e84393"/>
                <circle cx="72" cy="79" r="4" fill="#55efc4"/>
            ${svgFooter}`;

        case 'rocket':
            return `${svgHeader}
                <!-- Red and Silver Space Rocket with fire blast -->
                <path d="M50 10 C30 35, 30 70, 30 70 L70 70 C70 70, 70 35, 50 10 Z" fill="#d63031"/>
                <path d="M40 10 C35 35, 35 70, 35 70 L50 70 L50 10 Z" fill="#ff7675"/>
                <!-- Porthole Window -->
                <circle cx="50" cy="42" r="12" fill="#74b9ff"/>
                <circle cx="50" cy="42" r="9" fill="#e0f7fa"/>
                <circle cx="47" cy="39" r="3" fill="#fff"/>
                <!-- Fins -->
                <polygon points="30,55 12,80 30,75" fill="#0984e3"/>
                <polygon points="70,55 88,80 70,75" fill="#0984e3"/>
                <!-- Thruster Flame -->
                <polygon points="38,70 50,96 62,70" fill="#ff7675"/>
                <polygon points="42,70 50,90 58,70" fill="#f1c40f"/>
            ${svgFooter}`;

        case 'sun':
            return `${svgHeader}
                <!-- Bright Yellow Smiling Sun with rays -->
                <circle cx="50" cy="50" r="26" fill="${color || '#f1c40f'}"/>
                <g stroke="${color || '#f1c40f'}" stroke-width="6" stroke-linecap="round">
                    <line x1="50" y1="8" x2="50" y2="18"/><line x1="50" y1="82" x2="50" y2="92"/>
                    <line x1="8" y1="50" x2="18" y2="50"/><line x1="82" y1="50" x2="92" y2="50"/>
                    <line x1="20" y1="20" x2="28" y2="28"/><line x1="72" y1="72" x2="80" y2="80"/>
                    <line x1="20" y1="80" x2="28" y2="72"/><line x1="72" y1="28" x2="80" y2="20"/>
                </g>
                <!-- Smile face -->
                <circle cx="42" cy="44" r="3" fill="#d35400"/>
                <circle cx="58" cy="44" r="3" fill="#d35400"/>
                <path d="M40 54 Q50 62 60 54" stroke="#d35400" stroke-width="3" stroke-linecap="round" fill="none"/>
                <circle cx="38" cy="52" r="3" fill="#ff7675" opacity="0.6"/>
                <circle cx="62" cy="52" r="3" fill="#ff7675" opacity="0.6"/>
            ${svgFooter}`;

        case 'star':
            return `${svgHeader}
                <!-- Yellow Glowing Star with friendly face -->
                <polygon points="50,8 63,36 93,36 68,54 78,84 50,66 22,84 32,54 7,36 37,36" fill="${color || '#f1c40f'}"/>
                <circle cx="42" cy="44" r="3" fill="#d35400"/>
                <circle cx="58" cy="44" r="3" fill="#d35400"/>
                <path d="M44 52 Q50 58 56 52" stroke="#d35400" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'heart':
            return `${svgHeader}
                <!-- Bright Pink Heart with glossy shine -->
                <path d="M50 30 C35 10, 10 25, 10 50 C10 72, 40 86, 50 96 C60 86, 90 72, 90 50 C90 25, 65 10, 50 30 Z" fill="${color || '#fd79a8'}"/>
                <path d="M25 32 C20 38, 20 48, 22 52" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.7"/>
            ${svgFooter}`;

        case 'tree':
            return `${svgHeader}
                <!-- Clean Simple Oak Tree with brown trunk & fluffy green canopy -->
                <!-- Brown Trunk -->
                <rect x="42" y="52" width="16" height="40" rx="4" fill="#795548"/>
                <!-- Fluffy Green Leaf Canopy -->
                <circle cx="50" cy="42" r="30" fill="#2ecc71"/>
                <circle cx="32" cy="34" r="20" fill="#27ae60"/>
                <circle cx="68" cy="34" r="20" fill="#27ae60"/>
                <circle cx="50" cy="24" r="22" fill="#2ecc71"/>
            ${svgFooter}`;

        case 'bird':
            return `${svgHeader}
                <!-- Cute Pink Songbird with 2 distinct standing legs -->
                <circle cx="48" cy="42" r="26" fill="#fd79a8"/>
                <!-- Wing -->
                <path d="M48 42 Q70 24 82 42 Q64 54 48 42 Z" fill="#e84393"/>
                <!-- Eye & Shine -->
                <circle cx="34" cy="36" r="4.5" fill="#2d3436"/>
                <circle cx="32" cy="34" r="1.5" fill="#fff"/>
                <!-- Orange Beak -->
                <polygon points="22,38 8,42 22,48" fill="#ff7675"/>
                <!-- Tail Feathers -->
                <polygon points="72,42 88,34 82,50" fill="#e84393"/>
                <!-- 2 Standing Legs & Feet -->
                <!-- Left Leg -->
                <path d="M38 66 L38 86 M38 86 L32 88 M38 86 L44 88" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
                <!-- Right Leg -->
                <path d="M56 66 L56 86 M56 86 L50 88 M56 86 L62 88" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'book':
            return `${svgHeader}
                <!-- Red Story Book closed with pages showing on right -->
                <!-- Back Cover -->
                <rect x="18" y="16" width="66" height="68" rx="6" fill="#c0392b"/>
                <!-- Pages -->
                <rect x="24" y="20" width="58" height="60" rx="4" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                <!-- Front Red Cover -->
                <rect x="18" y="16" width="58" height="68" rx="6" fill="#e74c3c"/>
                <!-- Gold Star on cover -->
                <polygon points="47,38 51,48 61,48 53,54 56,64 47,58 38,64 41,54 33,48 43,48" fill="#f1c40f"/>
                <!-- Book Spine line -->
                <line x1="22" y1="16" x2="22" y2="84" stroke="#962d22" stroke-width="4"/>
            ${svgFooter}`;

        case 'car':
            return `${svgHeader}
                <!-- Bright Red Toy Car with wheels, windows, & headlights -->
                <!-- Main Body -->
                <path d="M12 60 L22 36 Q30 30 50 30 Q70 30 78 36 L88 60 Z" fill="#e74c3c"/>
                <rect x="8" y="54" width="84" height="24" rx="8" fill="#c0392b"/>
                <!-- Windows -->
                <path d="M26 38 L46 38 L46 54 L20 54 Z" fill="#74b9ff"/>
                <path d="M54 38 L74 38 L80 54 L54 54 Z" fill="#74b9ff"/>
                <!-- Yellow Headlight -->
                <circle cx="88" cy="62" r="5" fill="#f1c40f"/>
                <!-- Wheels -->
                <circle cx="28" cy="78" r="11" fill="#2d3436"/>
                <circle cx="72" cy="78" r="11" fill="#2d3436"/>
                <circle cx="28" cy="78" r="5" fill="#b2bec3"/>
                <circle cx="72" cy="78" r="5" fill="#b2bec3"/>
            ${svgFooter}`;

        case 'monkey':
            return `${svgHeader}
                <!-- Cheerful Brown Monkey Face with big ears & smile -->
                <!-- Ears -->
                <circle cx="16" cy="46" r="14" fill="#795548"/>
                <circle cx="16" cy="46" r="8" fill="#ffeaa7"/>
                <circle cx="84" cy="46" r="14" fill="#795548"/>
                <circle cx="84" cy="46" r="8" fill="#ffeaa7"/>
                <!-- Head -->
                <circle cx="50" cy="48" r="32" fill="#795548"/>
                <!-- Muzzle / Face Mask -->
                <ellipse cx="50" cy="56" rx="20" ry="16" fill="#ffeaa7"/>
                <ellipse cx="38" cy="40" rx="10" ry="12" fill="#ffeaa7"/>
                <ellipse cx="62" cy="40" rx="10" ry="12" fill="#ffeaa7"/>
                <!-- Eyes -->
                <circle cx="38" cy="40" r="4" fill="#2d3436"/>
                <circle cx="62" cy="40" r="4" fill="#2d3436"/>
                <circle cx="36" cy="38" r="1.5" fill="#fff"/>
                <circle cx="60" cy="38" r="1.5" fill="#fff"/>
                <!-- Nose -->
                <ellipse cx="50" cy="50" rx="5" ry="3.5" fill="#5d4037"/>
                <!-- Smiling Mouth -->
                <path d="M40 58 Q50 67 60 58" stroke="#5d4037" stroke-width="3" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'umbrella':
            return `${svgHeader}
                <!-- Rainbow Striped Umbrella -->
                <path d="M10 50 C10 18, 90 18, 90 50 Z" fill="#ff7675"/>
                <path d="M26 50 C26 22, 74 22, 74 50 Z" fill="#f1c40f"/>
                <path d="M40 50 C40 26, 60 26, 60 50 Z" fill="#74b9ff"/>
                <line x1="50" y1="48" x2="50" y2="84" stroke="#2d3436" stroke-width="4"/>
                <path d="M50 84 Q50 94 40 90" stroke="#2d3436" stroke-width="4" stroke-linecap="round" fill="none"/>
                <circle cx="50" cy="18" r="3" fill="#2d3436"/>
            ${svgFooter}`;

        case 'violin':
            return `${svgHeader}
                <!-- Wooden Violin / Fiddle with strings & bow -->
                <path d="M35 25 C28 35, 45 45, 32 62 C26 76, 74 76, 68 62 C55 45, 72 35, 65 25 Z" fill="#e17055"/>
                <path d="M38 28 C32 37, 46 45, 36 60 C32 70, 68 70, 64 60 C54 45, 68 37, 62 28 Z" fill="#d35400"/>
                <!-- Neck -->
                <rect x="47" y="6" width="6" height="24" fill="#5d4037"/>
                <!-- F-holes -->
                <path d="M38 48 Q35 52 38 56 M62 48 Q65 52 62 56" stroke="#2d3436" stroke-width="2.5" fill="none"/>
                <!-- Strings -->
                <line x1="48" y1="6" x2="48" y2="70" stroke="#fff" stroke-width="1.5"/>
                <line x1="52" y1="6" x2="52" y2="70" stroke="#fff" stroke-width="1.5"/>
            ${svgFooter}`;

        case 'watermelon':
            return `${svgHeader}
                <!-- Juicy Watermelon Slice with seeds -->
                <path d="M10 30 C10 82, 90 82, 90 30 Z" fill="#2ecc71"/>
                <path d="M14 30 C14 76, 86 76, 86 30 Z" fill="#fff"/>
                <path d="M18 30 C18 70, 82 70, 82 30 Z" fill="#ff7675"/>
                <!-- Black Seeds -->
                <ellipse cx="32" cy="44" rx="2" ry="4" fill="#2d3436"/>
                <ellipse cx="50" cy="56" rx="2" ry="4" fill="#2d3436"/>
                <ellipse cx="68" cy="44" rx="2" ry="4" fill="#2d3436"/>
                <ellipse cx="40" cy="36" rx="2" ry="4" fill="#2d3436"/>
                <ellipse cx="60" cy="36" rx="2" ry="4" fill="#2d3436"/>
            ${svgFooter}`;

        case 'xylophone':
            return `${svgHeader}
                <!-- Rainbow Xylophone Bars with Mallets -->
                <rect x="10" y="16" width="80" height="11" rx="4" fill="#ff7675"/>
                <rect x="14" y="31" width="72" height="11" rx="4" fill="#fdcb6e"/>
                <rect x="18" y="46" width="64" height="11" rx="4" fill="#55efc4"/>
                <rect x="22" y="61" width="56" height="11" rx="4" fill="#74b9ff"/>
                <rect x="26" y="76" width="48" height="11" rx="4" fill="#a29bfe"/>
                <!-- Pins -->
                <circle cx="16" cy="21.5" r="2" fill="#fff"/><circle cx="84" cy="21.5" r="2" fill="#fff"/>
                <circle cx="20" cy="36.5" r="2" fill="#fff"/><circle cx="80" cy="36.5" r="2" fill="#fff"/>
                <circle cx="24" cy="51.5" r="2" fill="#fff"/><circle cx="76" cy="51.5" r="2" fill="#fff"/>
            ${svgFooter}`;

        case 'yacht':
            return `${svgHeader}
                <!-- Sailboat / Yacht on blue waves -->
                <path d="M15 64 L85 64 L72 85 L28 85 Z" fill="#0984e3"/>
                <!-- Deck line -->
                <line x1="15" y1="64" x2="85" y2="64" stroke="#74b9ff" stroke-width="3"/>
                <!-- Sails -->
                <polygon points="48,12 48,60 15,60" fill="#ff7675"/>
                <polygon points="52,20 52,60 82,60" fill="#ffeaa7"/>
                <!-- Waves -->
                <path d="M5 86 Q25 94 45 86 Q65 94 85 86 Q95 90 100 86" stroke="#74b9ff" stroke-width="4" fill="none"/>
            ${svgFooter}`;

        case 'zebra':
            return `${svgHeader}
                <!-- Cute Zebra head with black and white stripes -->
                <ellipse cx="50" cy="50" rx="30" ry="36" fill="#ffffff"/>
                <ellipse cx="50" cy="50" rx="30" ry="36" stroke="#2d3436" stroke-width="4" fill="none"/>
                <!-- Black stripes -->
                <path d="M22 35 L38 38 M20 48 L36 49 M24 60 L38 58" stroke="#2d3436" stroke-width="4" stroke-linecap="round"/>
                <path d="M78 35 L62 38 M80 48 L64 49 M76 60 L62 58" stroke="#2d3436" stroke-width="4" stroke-linecap="round"/>
                <!-- Mane on top -->
                <path d="M42 14 L50 4 L58 14" stroke="#2d3436" stroke-width="5" stroke-linecap="round"/>
                <!-- Eyes & Muzzle -->
                <circle cx="38" cy="42" r="4" fill="#2d3436"/>
                <circle cx="62" cy="42" r="4" fill="#2d3436"/>
                <circle cx="36" cy="40" r="1.5" fill="#fff"/>
                <circle cx="60" cy="40" r="1.5" fill="#fff"/>
                <ellipse cx="50" cy="66" rx="14" ry="10" fill="#b2bec3"/>
                <circle cx="44" cy="66" r="2" fill="#2d3436"/>
                <circle cx="56" cy="66" r="2" fill="#2d3436"/>
            ${svgFooter}`;

        case 'ball':
            return `${svgHeader}
                <!-- Bright Beach / Toy Ball with colorful curved segments -->
                <circle cx="50" cy="50" r="38" fill="#0984e3"/>
                <path d="M50 12 C25 25, 25 75, 50 88 C75 75, 75 25, 50 12 Z" fill="#ff7675"/>
                <path d="M50 12 C35 30, 35 70, 50 88 Z" fill="#f1c40f"/>
                <path d="M12 50 C25 25, 75 25, 88 50 C75 75, 25 75, 12 50 Z" fill="#55efc4" opacity="0.6"/>
                <circle cx="50" cy="50" r="8" fill="#ffffff"/>
            ${svgFooter}`;

        case 'book':
            return `${svgHeader}
                <!-- Open Story Book with colorful cover and bookmark ribbon -->
                <path d="M12 28 Q50 36 50 82 Q12 74 12 28 Z" fill="#74b9ff"/>
                <path d="M88 28 Q50 36 50 82 Q88 74 88 28 Z" fill="#0984e3"/>
                <!-- Pages -->
                <path d="M16 26 Q50 34 50 78 Q16 70 16 26 Z" fill="#ffffff"/>
                <path d="M84 26 Q50 34 50 78 Q84 70 84 26 Z" fill="#fff8e1"/>
                <!-- Spine & Ribbon -->
                <line x1="50" y1="34" x2="50" y2="78" stroke="#d35400" stroke-width="3"/>
                <path d="M50 34 Q56 50 62 65 L56 62 L50 65 Z" fill="#ff7675"/>
                <!-- Text lines -->
                <line x1="24" y1="40" x2="42" y2="44" stroke="#b2bec3" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="24" y1="50" x2="42" y2="54" stroke="#b2bec3" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="58" y1="44" x2="76" y2="40" stroke="#b2bec3" stroke-width="2.5" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'bird':
            return `${svgHeader}
                <!-- Cute Pink Songbird with wing & yellow beak -->
                <circle cx="48" cy="46" r="28" fill="#fd79a8"/>
                <!-- Wing -->
                <path d="M48 46 Q70 28 82 46 Q64 58 48 46 Z" fill="#e84393"/>
                <!-- Eye & Shine -->
                <circle cx="34" cy="40" r="4.5" fill="#2d3436"/>
                <circle cx="32" cy="38" r="1.5" fill="#fff"/>
                <!-- Orange Beak -->
                <polygon points="22,42 8,46 22,52" fill="#ff7675"/>
                <!-- Tail Feathers -->
                <polygon points="72,46 88,38 82,54" fill="#e84393"/>
                <!-- Feet -->
                <path d="M40 74 L40 86 M40 86 L34 88 M40 86 L46 88" stroke="#e17055" stroke-width="3" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'duck':
            return `${svgHeader}
                <!-- Yellow Rubber Duckie on water -->
                <circle cx="62" cy="32" r="16" fill="#f1c40f"/>
                <ellipse cx="44" cy="56" rx="28" ry="18" fill="#f1c40f"/>
                <!-- Tail -->
                <path d="M18 52 Q10 42 16 38 Q22 48 26 54 Z" fill="#f1c40f"/>
                <!-- Eye -->
                <circle cx="66" cy="28" r="3" fill="#2d3436"/>
                <circle cx="65" cy="27" r="1" fill="#fff"/>
                <!-- Orange Beak -->
                <path d="M76 32 C88 32, 88 42, 74 40 Z" fill="#e17055"/>
                <!-- Blue Water ripples -->
                <path d="M10 74 Q30 80 50 74 Q70 80 90 74" stroke="#74b9ff" stroke-width="4" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'banana':
            return `${svgHeader}
                <!-- Bright Yellow Ripe Banana -->
                <path d="M18 70 C15 30, 60 15, 82 42 C65 30, 30 45, 18 70 Z" fill="#f1c40f"/>
                <path d="M18 70 C25 82, 60 78, 82 42 C68 62, 35 72, 18 70 Z" fill="#f39c12"/>
                <!-- Stem -->
                <path d="M82 42 L88 36" stroke="#795548" stroke-width="5" stroke-linecap="round"/>
                <path d="M18 70 L12 74" stroke="#795548" stroke-width="4" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'milk':
            return `${svgHeader}
                <!-- Milk Carton with cow spots & straw -->
                <polygon points="26,35 50,18 74,35" fill="#74b9ff"/>
                <rect x="26" y="35" width="48" height="52" rx="4" fill="#ffffff" stroke="#dcdde1" stroke-width="3"/>
                <!-- Blue Banner -->
                <rect x="26" y="52" width="48" height="16" fill="#74b9ff"/>
                <circle cx="50" cy="60" r="5" fill="#ffeaa7"/>
                <!-- Red Drinking Straw -->
                <path d="M58 24 L70 8" stroke="#ff7675" stroke-width="4" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'cake':
            return `${svgHeader}
                <!-- Birthday Cake with frosting & lit candle -->
                <rect x="16" y="52" width="68" height="34" rx="8" fill="#fd79a8"/>
                <!-- White Frosting Drips -->
                <path d="M16 52 Q24 64 33 52 Q41 64 50 52 Q59 64 68 52 Q76 64 84 52 L84 48 L16 48 Z" fill="#ffffff"/>
                <!-- Candle -->
                <rect x="47" y="24" width="6" height="24" rx="2" fill="#ffeaa7"/>
                <!-- Flame -->
                <path d="M50 10 Q56 18 50 24 Q44 18 50 10 Z" fill="#f1c40f"/>
                <path d="M50 14 Q53 18 50 22 Q47 18 50 14 Z" fill="#ff7675"/>
            ${svgFooter}`;

        case 'strawberry':
            return `${svgHeader}
                <!-- Red Strawberry with green leafy top and yellow seeds -->
                <path d="M50 88 C20 70 15 40 25 30 C35 20 65 20 75 30 C85 40 80 70 50 88 Z" fill="#ff7675"/>
                <path d="M50 88 C25 70 20 40 30 30 C40 20 60 20 70 30 C80 40 75 70 50 88 Z" fill="#d63031"/>
                <!-- Leafy Crown -->
                <path d="M50 25 L40 12 L45 22 L30 18 L40 26 L50 25 L60 26 L70 18 L55 22 L60 12 Z" fill="#2ecc71"/>
                <!-- Stem -->
                <path d="M50 18 Q52 10 58 8" stroke="#27ae60" stroke-width="4" stroke-linecap="round" fill="none"/>
                <!-- Little Yellow Seeds -->
                <circle cx="35" cy="40" r="2" fill="#ffeaa7"/><circle cx="50" cy="38" r="2" fill="#ffeaa7"/><circle cx="65" cy="40" r="2" fill="#ffeaa7"/>
                <circle cx="42" cy="52" r="2" fill="#ffeaa7"/><circle cx="58" cy="52" r="2" fill="#ffeaa7"/><circle cx="50" cy="66" r="2" fill="#ffeaa7"/>
            ${svgFooter}`;

        case 'story_puppy':
            return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                <!-- Wide Park Landscape: Sky, Sun, Clouds, Oak Tree, Bench, Max the Dog & Red Ball -->
                <rect width="300" height="120" fill="#e0f2fe"/>
                <!-- Warm Sun in sky -->
                <circle cx="260" cy="25" r="16" fill="#f1c40f"/>
                <!-- Clouds -->
                <circle cx="50" cy="25" r="12" fill="#ffffff" opacity="0.9"/>
                <circle cx="62" cy="22" r="15" fill="#ffffff" opacity="0.9"/>
                <circle cx="74" cy="25" r="12" fill="#ffffff" opacity="0.9"/>
                <!-- Park Green Hills -->
                <path d="M0 75 Q150 50 300 75 L300 120 L0 120 Z" fill="#2ecc71"/>
                <path d="M0 88 Q150 70 300 88 L300 120 L0 120 Z" fill="#27ae60"/>
                <!-- Big Oak Tree on Left -->
                <rect x="25" y="35" width="14" height="55" fill="#795548"/>
                <circle cx="32" cy="30" r="26" fill="#27ae60"/>
                <circle cx="18" cy="38" r="20" fill="#2ecc71"/>
                <circle cx="46" cy="34" r="20" fill="#55efc4"/>
                <!-- Park Wooden Bench in Center -->
                <rect x="130" y="70" width="70" height="8" rx="3" fill="#d35400"/>
                <rect x="130" y="82" width="70" height="8" rx="3" fill="#e67e22"/>
                <rect x="138" y="90" width="6" height="22" fill="#5d4037"/>
                <rect x="186" y="90" width="6" height="22" fill="#5d4037"/>
                <!-- Max the Puppy Sleeping Under Bench -->
                <ellipse cx="160" cy="98" rx="16" ry="10" fill="#f39c12"/>
                <circle cx="146" cy="96" r="9" fill="#f39c12"/>
                <ellipse cx="142" cy="100" rx="4" ry="5" fill="#d35400"/>
                <!-- Red Ball near Tree -->
                <circle cx="75" cy="102" r="7" fill="#ff7675"/>
                <!-- Delicious Bone -->
                <path d="M185 100 L205 100" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
                <circle cx="185" cy="97" r="3.5" fill="#fff"/><circle cx="185" cy="103" r="3.5" fill="#fff"/>
                <circle cx="205" cy="97" r="3.5" fill="#fff"/><circle cx="205" cy="103" r="3.5" fill="#fff"/>
            </svg>`;

        case 'story_quantum':
            return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                <!-- Wide Sci-Fi Lab Scene: Space Viewport Window, Lab Console & Quantum Key Chamber -->
                <rect width="300" height="120" fill="#0f172a"/>
                <!-- Space Viewport Glass Window on Right -->
                <rect x="190" y="10" width="95" height="70" rx="8" fill="#1e293b" stroke="#334155" stroke-width="3"/>
                <circle cx="250" cy="35" r="16" fill="#fef08a"/>
                <circle cx="210" cy="25" r="1.5" fill="#fff"/><circle cx="270" cy="50" r="2" fill="#fff"/><circle cx="230" cy="60" r="1" fill="#fff"/>
                <!-- Lab Console Desk across bottom -->
                <rect x="10" y="80" width="280" height="40" rx="6" fill="#334155"/>
                <rect x="25" y="88" width="55" height="24" rx="3" fill="#0284c7"/>
                <!-- Waveform Monitors -->
                <path d="M30 100 L38 92 L46 108 L54 96 L62 100" stroke="#38bdf8" stroke-width="2.5" fill="none"/>
                <!-- Glass Chamber in Center -->
                <rect x="110" y="18" width="65" height="75" rx="18" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="3"/>
                <!-- Glowing Quantum Key -->
                <path d="M142 32 Q150 32 150 42 Q150 48 142 48 L142 68 L138 68 L138 60 L134 60 L134 54 L142 54 Z" fill="#38bdf8"/>
                <circle cx="142" cy="38" r="4" fill="#e0f2fe"/>
                <!-- Blue Quantum Aura Glow Circles -->
                <circle cx="142" cy="48" r="22" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4,4"/>
                <circle cx="142" cy="48" r="28" fill="none" stroke="#93c5fd" stroke-width="1.5" opacity="0.6"/>
            </svg>`;

        case 'story_reef':
            return `<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;">
                <!-- Wide Deep Ocean Reef Scene: Coral, Jellyfish, Maya's Submersible & Sea Turtle -->
                <rect width="300" height="120" fill="#0369a1"/>
                <path d="M0 50 Q75 25 150 50 Q225 75 300 50 L300 120 L0 120 Z" fill="#0284c7" opacity="0.6"/>
                <!-- Dark Ocean Floor -->
                <path d="M0 95 Q150 80 300 100 L300 120 L0 120 Z" fill="#0f172a"/>
                <!-- Glowing Azure Coral Reef Branches on Left & Right -->
                <path d="M25 120 L25 80 Q35 65 15 55 M25 80 Q45 70 55 55" stroke="#06b6d4" stroke-width="5" stroke-linecap="round" fill="none"/>
                <path d="M260 120 L260 75 Q240 60 250 45 M260 75 Q275 62 285 50" stroke="#22d3ee" stroke-width="5" stroke-linecap="round" fill="none"/>
                <circle cx="15" cy="55" r="4" fill="#67e8f9"/><circle cx="55" cy="55" r="4" fill="#67e8f9"/>
                <circle cx="250" cy="45" r="4" fill="#67e8f9"/><circle cx="285" cy="50" r="4" fill="#67e8f9"/>
                <!-- Maya's Yellow Submersible in Center -->
                <ellipse cx="120" cy="55" rx="32" ry="20" fill="#f59e0b"/>
                <circle cx="134" cy="55" r="9" fill="#e0f2fe" stroke="#d97706" stroke-width="3"/>
                <path d="M88 55 L78 45 L78 65 Z" fill="#d97706"/>
                <!-- Bioluminescent Jellyfish -->
                <path d="M200 25 C200 14 220 14 220 25 Z" fill="#a855f7" opacity="0.85"/>
                <path d="M204 25 L204 38 M210 25 L210 42 M216 25 L216 36" stroke="#c084fc" stroke-width="2"/>
                <!-- Friendly Sea Turtle Swimming on Right -->
                <ellipse cx="190" cy="75" rx="14" ry="10" fill="#15803d"/>
                <circle cx="206" cy="73" r="5" fill="#166534"/>
                <ellipse cx="192" cy="65" rx="5" ry="8" fill="#15803d" transform="rotate(30 192 65)"/>
                <ellipse cx="192" cy="85" rx="5" ry="8" fill="#15803d" transform="rotate(-30 192 85)"/>
            </svg>`;

        case 'jellyfish':
            return `${svgHeader}
                <!-- Bioluminescent Purple Jellyfish with tentacles -->
                <path d="M20 42 C20 18 80 18 80 42 C80 48 20 48 20 42 Z" fill="#a855f7"/>
                <path d="M20 42 Q30 50 40 42 Q50 50 60 42 Q70 50 80 42" fill="#c084fc"/>
                <!-- Shiny eyes -->
                <circle cx="40" cy="32" r="3" fill="#ffffff"/><circle cx="60" cy="32" r="3" fill="#ffffff"/>
                <circle cx="40" cy="32" r="1.5" fill="#2d3436"/><circle cx="60" cy="32" r="1.5" fill="#2d3436"/>
                <!-- Wavy tentacles -->
                <path d="M28 48 Q22 68 30 88 M42 48 Q50 72 40 92 M58 48 Q64 70 56 92 M72 48 Q78 68 70 88" stroke="#e9d5ff" stroke-width="4" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'sea_turtle':
            return `${svgHeader}
                <!-- Friendly Green Sea Turtle with shell patterns and flippers -->
                <ellipse cx="50" cy="50" rx="28" ry="22" fill="#15803d"/>
                <ellipse cx="50" cy="50" rx="24" ry="18" fill="#22c55e"/>
                <!-- Head -->
                <circle cx="82" cy="50" r="10" fill="#166534"/>
                <circle cx="84" cy="46" r="2" fill="#ffffff"/><circle cx="84" cy="46" r="1" fill="#000000"/>
                <!-- Front Flippers -->
                <path d="M60 32 C65 14 45 8 35 24 Z" fill="#15803d"/>
                <path d="M60 68 C65 86 45 92 35 76 Z" fill="#15803d"/>
                <!-- Back Flippers -->
                <path d="M28 35 C20 22 15 30 22 42 Z" fill="#166534"/>
                <path d="M28 65 C20 78 15 70 22 58 Z" fill="#166534"/>
            ${svgFooter}`;

        case 'coral':
            return `${svgHeader}
                <!-- Glowing Turquoise Azure Coral Reef -->
                <path d="M50 90 L50 45 Q58 30 45 20 M50 45 Q38 32 40 18 M50 60 Q70 48 78 35 M50 60 Q30 50 20 38 M50 75 Q75 68 85 58" stroke="#06b6d4" stroke-width="8" stroke-linecap="round" fill="none"/>
                <circle cx="45" cy="20" r="5" fill="#67e8f9"/><circle cx="40" cy="18" r="5" fill="#67e8f9"/>
                <circle cx="78" cy="35" r="5" fill="#67e8f9"/><circle cx="20" cy="38" r="5" fill="#67e8f9"/>
                <circle cx="85" cy="58" r="5" fill="#67e8f9"/>
            ${svgFooter}`;

        case 'submarine':
            return `${svgHeader}
                <!-- Maya's Yellow Submersible -->
                <ellipse cx="48" cy="52" rx="34" ry="22" fill="#f59e0b"/>
                <rect x="40" y="24" width="16" height="12" rx="4" fill="#d97706"/>
                <path d="M48 24 L48 12 L56 12" stroke="#d97706" stroke-width="4" stroke-linecap="round" fill="none"/>
                <!-- Porthole Window -->
                <circle cx="56" cy="52" r="10" fill="#e0f2fe" stroke="#d97706" stroke-width="3"/>
                <circle cx="53" cy="49" r="3" fill="#ffffff"/>
                <!-- Propeller -->
                <path d="M14 52 L6 42 L6 62 Z" fill="#b45309"/>
            ${svgFooter}`;

        case 'quantum_key':
            return `${svgHeader}
                <!-- Glowing Blue Quantum Key -->
                <circle cx="36" cy="50" r="18" fill="none" stroke="#38bdf8" stroke-width="6"/>
                <circle cx="36" cy="50" r="10" fill="#e0f2fe"/>
                <rect x="54" y="44" width="34" height="12" rx="3" fill="#38bdf8"/>
                <rect x="74" y="56" width="6" height="12" rx="2" fill="#0284c7"/>
                <rect x="82" y="56" width="6" height="10" rx="2" fill="#0284c7"/>
                <circle cx="36" cy="50" r="26" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4,4"/>
            ${svgFooter}`;

        case 'satellite':
            return `${svgHeader}
                <!-- Space Satellite with Solar Panels & Antenna -->
                <!-- Central Satellite Body -->
                <rect x="36" y="36" width="28" height="28" rx="5" fill="#94a3b8" stroke="#334155" stroke-width="3"/>
                <circle cx="50" cy="50" r="7" fill="#38bdf8"/>
                <!-- Left Solar Panel -->
                <rect x="6" y="40" width="24" height="20" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                <line x1="18" y1="40" x2="18" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
                <line x1="30" y1="50" x2="36" y2="50" stroke="#334155" stroke-width="3"/>
                <!-- Right Solar Panel -->
                <rect x="70" y="40" width="24" height="20" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                <line x1="82" y1="40" x2="82" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
                <line x1="64" y1="50" x2="70" y2="50" stroke="#334155" stroke-width="3"/>
                <!-- Dish Antenna on top -->
                <path d="M38 24 Q50 14 62 24 Z" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
                <line x1="50" y1="24" x2="50" y2="36" stroke="#475569" stroke-width="3"/>
                <line x1="50" y1="14" x2="50" y2="8" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="50" cy="7" r="2.5" fill="#ef4444"/>
            ${svgFooter}`;

        case 'lab_goggles':
            return `${svgHeader}
                <!-- Scientist Lab Goggles -->
                <rect x="15" y="32" width="32" height="28" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="4"/>
                <rect x="53" y="32" width="32" height="28" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="4"/>
                <line x1="47" y1="46" x2="53" y2="46" stroke="#0284c7" stroke-width="5"/>
                <path d="M5 46 L15 46 M85 46 L95 46" stroke="#334155" stroke-width="6" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'data_chip':
        case 'memory_chip':
            return `${svgHeader}
                <!-- Modern Encoded Silicon Memory Chip -->
                <line x1="10" y1="28" x2="24" y2="28" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="10" y1="42" x2="24" y2="42" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="10" y1="58" x2="24" y2="58" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="10" y1="72" x2="24" y2="72" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="76" y1="28" x2="90" y2="28" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="76" y1="42" x2="90" y2="42" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="76" y1="58" x2="90" y2="58" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <line x1="76" y1="72" x2="90" y2="72" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
                <!-- Dark Silicon Ceramic Carrier Package -->
                <rect x="20" y="16" width="60" height="68" rx="8" fill="#0f172a" stroke="#334155" stroke-width="3.5"/>
                <!-- Top Index Notch -->
                <path d="M44 16 A6 6 0 0 0 56 16" stroke="#f59e0b" stroke-width="3" fill="#1e293b"/>
                <!-- Gold Pin 1 Dot -->
                <circle cx="30" cy="27" r="3" fill="#f59e0b"/>
                <!-- Internal Silicon Die with glowing cyan bus traces -->
                <rect x="31" y="32" width="38" height="40" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
                <line x1="37" y1="44" x2="63" y2="44" stroke="#00f0ff" stroke-width="2"/>
                <line x1="37" y1="60" x2="63" y2="60" stroke="#00f0ff" stroke-width="2"/>
                <line x1="50" y1="36" x2="50" y2="68" stroke="#00f0ff" stroke-width="2"/>
                <!-- Golden Core Processor Node -->
                <circle cx="50" cy="52" r="6" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
            ${svgFooter}`;

        case 'dog_bone':
            return `${svgHeader}
                <!-- Tasty Dog Bone -->
                <rect x="25" y="44" width="50" height="12" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="24" cy="42" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="24" cy="58" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="76" cy="42" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
                <circle cx="76" cy="58" r="9" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
            ${svgFooter}`;

        case 'sea':
            return `${svgHeader}
                <!-- Blue Sea waves with shiny fish & starfish -->
                <rect x="10" y="20" width="80" height="70" rx="10" fill="#0984e3"/>
                <path d="M10 40 Q30 30 50 40 Q70 50 90 40 L90 90 L10 90 Z" fill="#74b9ff"/>
                <path d="M10 60 Q30 50 50 60 Q70 70 90 60 L90 90 L10 90 Z" fill="#00cec9"/>
                <!-- Swimming little fish -->
                <ellipse cx="65" cy="45" rx="8" ry="5" fill="#fdcb6e"/>
                <polygon points="73,45 80,40 80,50" fill="#fdcb6e"/>
                <circle cx="61" cy="44" r="1" fill="#2d3436"/>
            ${svgFooter}`;

        case 'frog':
            return `${svgHeader}
                <!-- Cute Green Frog with big eyes & big smile -->
                <circle cx="32" cy="28" r="14" fill="#2ecc71"/>
                <circle cx="68" cy="28" r="14" fill="#2ecc71"/>
                <circle cx="32" cy="26" r="8" fill="#fff"/>
                <circle cx="68" cy="26" r="8" fill="#fff"/>
                <circle cx="32" cy="26" r="4" fill="#2d3436"/>
                <circle cx="68" cy="26" r="4" fill="#2d3436"/>
                <circle cx="30" cy="24" r="1.5" fill="#fff"/>
                <circle cx="66" cy="24" r="1.5" fill="#fff"/>
                <!-- Head & Body -->
                <ellipse cx="50" cy="56" rx="36" ry="28" fill="#2ecc71"/>
                <ellipse cx="50" cy="62" rx="22" ry="16" fill="#55efc4"/>
                <!-- Rosy cheeks & mouth -->
                <circle cx="28" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                <circle cx="72" cy="52" r="5" fill="#ff7675" opacity="0.6"/>
                <path d="M34 56 Q50 68 66 56" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;

        case 'orangefruit':
            return `${svgHeader}
                <!-- Juicy Orange Fruit with leaf -->
                <circle cx="50" cy="54" r="36" fill="#e67e22"/>
                <circle cx="50" cy="54" r="32" fill="#ff9f43"/>
                <!-- Texture dimples -->
                <circle cx="36" cy="42" r="1.5" fill="#e67e22"/><circle cx="60" cy="46" r="1.5" fill="#e67e22"/>
                <circle cx="44" cy="68" r="1.5" fill="#e67e22"/><circle cx="62" cy="64" r="1.5" fill="#e67e22"/>
                <!-- Stem & Leaf -->
                <path d="M50 20 L50 10" stroke="#795548" stroke-width="4" stroke-linecap="round"/>
                <path d="M50 16 Q65 6 72 16 Q60 22 50 16 Z" fill="#2ecc71"/>
            ${svgFooter}`;

        case 'grapes':
            return `${svgHeader}
                <!-- Cluster of Purple Grapes with green leaf -->
                <!-- Leaf & Stem -->
                <path d="M50 18 L50 8" stroke="#795548" stroke-width="4" stroke-linecap="round"/>
                <path d="M50 14 Q68 4 72 16 Q58 22 50 14 Z" fill="#2ecc71"/>
                <!-- Grape circles in rows -->
                <g fill="#8e44ad">
                    <circle cx="36" cy="30" r="12"/><circle cx="64" cy="30" r="12"/><circle cx="50" cy="30" r="12"/>
                    <circle cx="28" cy="48" r="12"/><circle cx="50" cy="48" r="12"/><circle cx="72" cy="48" r="12"/>
                    <circle cx="38" cy="66" r="12"/><circle cx="62" cy="66" r="12"/>
                    <circle cx="50" cy="82" r="12"/>
                </g>
                <!-- Highlights -->
                <circle cx="32" cy="26" r="3" fill="#9b59b6"/><circle cx="46" cy="44" r="3" fill="#9b59b6"/><circle cx="46" cy="78" r="3" fill="#9b59b6"/>
            ${svgFooter}`;

        case 'barbie':
            return `${svgHeader}
                <!-- Pink Barbie Doll figure with crown & dress -->
                <!-- Blonde Hair -->
                <circle cx="50" cy="32" r="22" fill="#f1c40f"/>
                <!-- Face -->
                <circle cx="50" cy="34" r="15" fill="#ffeaa7"/>
                <!-- Cute Eyes & Pink Lips -->
                <circle cx="44" cy="32" r="2.5" fill="#2d3436"/><circle cx="56" cy="32" r="2.5" fill="#2d3436"/>
                <path d="M46 39 Q50 43 54 39" stroke="#e84393" stroke-width="2" fill="none"/>
                <!-- Sparkly Crown -->
                <polygon points="42,20 46,12 50,18 54,12 58,20" fill="#fdcb6e"/>
                <!-- Pink Ballgown Dress -->
                <polygon points="44,48 56,48 78,92 22,92" fill="#fd79a8"/>
                <path d="M44 48 Q50 56 56 48 L78 92 Q50 86 22 92 Z" fill="#e84393"/>
                <circle cx="50" cy="56" r="4" fill="#fff"/>
            ${svgFooter}`;

        case 'ant':
            return `${svgHeader}
                <!-- Black Ant with 3 body segments, antennae & legs -->
                <!-- 3 Body segments -->
                <ellipse cx="22" cy="52" rx="14" ry="18" fill="#2d3436"/>
                <circle cx="46" cy="52" r="12" fill="#2d3436"/>
                <circle cx="72" cy="52" r="15" fill="#2d3436"/>
                <!-- Eyes -->
                <circle cx="78" cy="46" r="3" fill="#fff"/><circle cx="78" cy="46" r="1.5" fill="#000"/>
                <!-- Antennae -->
                <path d="M78 40 Q84 25 90 22" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M74 38 Q78 22 84 18" stroke="#2d3436" stroke-width="3" stroke-linecap="round" fill="none"/>
                <!-- 6 Legs -->
                <path d="M46 52 L36 78 M46 52 L46 80 M46 52 L56 78" stroke="#2d3436" stroke-width="3" stroke-linecap="round"/>
                <path d="M46 52 L36 26 M46 52 L46 24 M46 52 L56 26" stroke="#2d3436" stroke-width="3" stroke-linecap="round"/>
            ${svgFooter}`;

        case 'rabbit':
            return `${svgHeader}
                <!-- White Bunny Rabbit with long pink ears & carrot -->
                <!-- Long Ears -->
                <ellipse cx="36" cy="22" rx="8" ry="22" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                <ellipse cx="36" cy="22" rx="4" ry="16" fill="#ff7675"/>
                <ellipse cx="64" cy="22" rx="8" ry="22" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                <ellipse cx="64" cy="22" rx="4" ry="16" fill="#ff7675"/>
                <!-- Head & Body -->
                <circle cx="50" cy="52" r="28" fill="#ffffff" stroke="#dcdde1" stroke-width="2"/>
                <!-- Eyes & Pink Nose -->
                <circle cx="38" cy="46" r="4" fill="#2d3436"/><circle cx="62" cy="46" r="4" fill="#2d3436"/>
                <circle cx="36" cy="44" r="1.5" fill="#fff"/><circle cx="60" cy="44" r="1.5" fill="#fff"/>
                <polygon points="50,52 45,57 55,57" fill="#ff7675"/>
                <path d="M45 60 Q50 65 55 60" stroke="#2d3436" stroke-width="2.5" stroke-linecap="round" fill="none"/>
                <!-- Rosy cheeks -->
                <circle cx="30" cy="54" r="4" fill="#ff7675" opacity="0.5"/>
                <circle cx="70" cy="54" r="4" fill="#ff7675" opacity="0.5"/>
            ${svgFooter}`;

        case 'circle': return `${svgHeader}<circle cx="50" cy="50" r="40" fill="${color}"/>${svgFooter}`;
        case 'square': return `${svgHeader}<rect x="15" y="15" width="70" height="70" rx="8" fill="${color}"/>${svgFooter}`;
        case 'triangle': return `${svgHeader}<polygon points="50,15 90,85 10,85" fill="${color}"/>${svgFooter}`;
        case 'rectangle': return `${svgHeader}<rect x="10" y="25" width="80" height="50" rx="8" fill="${color}"/>${svgFooter}`;
        case 'oval': return `${svgHeader}<ellipse cx="50" cy="50" rx="42" ry="28" fill="${color}"/>${svgFooter}`;
        case 'diamond': return `${svgHeader}<polygon points="50,10 90,50 50,90 10,50" fill="${color}"/>${svgFooter}`;
        case 'pentagon': return `${svgHeader}<polygon points="50,10 90,40 75,90 25,90 10,40" fill="${color}"/>${svgFooter}`;
        case 'hexagon': return `${svgHeader}<polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="${color}"/>${svgFooter}`;

        default:
            return `${svgHeader}
                <circle cx="50" cy="50" r="38" fill="${color}"/>
                <circle cx="38" cy="42" r="5" fill="#fff"/>
                <circle cx="62" cy="42" r="5" fill="#fff"/>
                <path d="M38 62 Q50 74 62 62" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>
            ${svgFooter}`;
    }
}

