import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Country {
  name: string;
  code: string;
  isd: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'India', code: 'IN', isd: '+91', flag: '🇮🇳' },
  { name: 'United States', code: 'US', isd: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', isd: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: 'CA', isd: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: 'AU', isd: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: 'DE', isd: '+49', flag: '🇩🇪' },
  { name: 'France', code: 'FR', isd: '+33', flag: '🇫🇷' },
  { name: 'Japan', code: 'JP', isd: '+81', flag: '🇯🇵' },
  { name: 'China', code: 'CN', isd: '+86', flag: '🇨🇳' },
  { name: 'Brazil', code: 'BR', isd: '+55', flag: '🇧🇷' },
  { name: 'Mexico', code: 'MX', isd: '+52', flag: '🇲🇽' },
  { name: 'South Korea', code: 'KR', isd: '+82', flag: '🇰🇷' },
  { name: 'Italy', code: 'IT', isd: '+39', flag: '🇮🇹' },
  { name: 'Spain', code: 'ES', isd: '+34', flag: '🇪🇸' },
  { name: 'Netherlands', code: 'NL', isd: '+31', flag: '🇳🇱' },
  { name: 'Switzerland', code: 'CH', isd: '+41', flag: '🇨🇭' },
  { name: 'Sweden', code: 'SE', isd: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: 'NO', isd: '+47', flag: '🇳🇴' },
  { name: 'Denmark', code: 'DK', isd: '+45', flag: '🇩🇰' },
  { name: 'Finland', code: 'FI', isd: '+358', flag: '🇫🇮' },
  { name: 'Poland', code: 'PL', isd: '+48', flag: '🇵🇱' },
  { name: 'Russia', code: 'RU', isd: '+7', flag: '🇷🇺' },
  { name: 'Turkey', code: 'TR', isd: '+90', flag: '🇹🇷' },
  { name: 'Saudi Arabia', code: 'SA', isd: '+966', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: 'AE', isd: '+971', flag: '🇦🇪' },
  { name: 'Singapore', code: 'SG', isd: '+65', flag: '🇸🇬' },
  { name: 'Malaysia', code: 'MY', isd: '+60', flag: '🇲🇾' },
  { name: 'Thailand', code: 'TH', isd: '+66', flag: '🇹🇭' },
  { name: 'Vietnam', code: 'VN', isd: '+84', flag: '🇻🇳' },
  { name: 'Philippines', code: 'PH', isd: '+63', flag: '🇵🇭' },
  { name: 'Indonesia', code: 'ID', isd: '+62', flag: '🇮🇩' },
  { name: 'Pakistan', code: 'PK', isd: '+92', flag: '🇵🇰' },
  { name: 'Bangladesh', code: 'BD', isd: '+880', flag: '🇧🇩' },
  { name: 'Sri Lanka', code: 'LK', isd: '+94', flag: '🇱🇰' },
  { name: 'Nepal', code: 'NP', isd: '+977', flag: '🇳🇵' },
  { name: 'Bhutan', code: 'BT', isd: '+975', flag: '🇧🇹' },
  { name: 'Maldives', code: 'MV', isd: '+960', flag: '🇲🇻' },
  { name: 'Afghanistan', code: 'AF', isd: '+93', flag: '🇦🇫' },
  { name: 'Iran', code: 'IR', isd: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: 'IQ', isd: '+964', flag: '🇮🇶' },
  { name: 'Kuwait', code: 'KW', isd: '+965', flag: '🇰🇼' },
  { name: 'Qatar', code: 'QA', isd: '+974', flag: '🇶🇦' },
  { name: 'Oman', code: 'OM', isd: '+968', flag: '🇴🇲' },
  { name: 'Yemen', code: 'YE', isd: '+967', flag: '🇾🇪' },
  { name: 'Jordan', code: 'JO', isd: '+962', flag: '🇯🇴' },
  { name: 'Lebanon', code: 'LB', isd: '+961', flag: '🇱🇧' },
  { name: 'Syria', code: 'SY', isd: '+963', flag: '🇸🇾' },
  { name: 'Israel', code: 'IL', isd: '+972', flag: '🇮🇱' },
  { name: 'Palestine', code: 'PS', isd: '+970', flag: '🇵🇸' },
  { name: 'Egypt', code: 'EG', isd: '+20', flag: '🇪🇬' },
  { name: 'Morocco', code: 'MA', isd: '+212', flag: '🇲🇦' },
  { name: 'Algeria', code: 'DZ', isd: '+213', flag: '🇩🇿' },
  { name: 'Tunisia', code: 'TN', isd: '+216', flag: '🇹🇳' },
  { name: 'Libya', code: 'LY', isd: '+218', flag: '🇱🇾' },
  { name: 'Sudan', code: 'SD', isd: '+249', flag: '🇸🇩' },
  { name: 'Ethiopia', code: 'ET', isd: '+251', flag: '🇪🇹' },
  { name: 'Kenya', code: 'KE', isd: '+254', flag: '🇰🇪' },
  { name: 'Uganda', code: 'UG', isd: '+256', flag: '🇺🇬' },
  { name: 'Tanzania', code: 'TZ', isd: '+255', flag: '🇹🇿' },
  { name: 'Nigeria', code: 'NG', isd: '+234', flag: '🇳🇬' },
  { name: 'Ghana', code: 'GH', isd: '+233', flag: '🇬🇭' },
  { name: 'South Africa', code: 'ZA', isd: '+27', flag: '🇿🇦' },
  { name: 'Argentina', code: 'AR', isd: '+54', flag: '🇦🇷' },
  { name: 'Chile', code: 'CL', isd: '+56', flag: '🇨🇱' },
  { name: 'Colombia', code: 'CO', isd: '+57', flag: '🇨🇴' },
  { name: 'Peru', code: 'PE', isd: '+51', flag: '🇵🇪' },
  { name: 'Venezuela', code: 'VE', isd: '+58', flag: '🇻🇪' },
  { name: 'Ecuador', code: 'EC', isd: '+593', flag: '🇪🇨' },
  { name: 'Bolivia', code: 'BO', isd: '+591', flag: '🇧🇴' },
  { name: 'Paraguay', code: 'PY', isd: '+595', flag: '🇵🇾' },
  { name: 'Uruguay', code: 'UY', isd: '+598', flag: '🇺🇾' },
  { name: 'New Zealand', code: 'NZ', isd: '+64', flag: '🇳🇿' },
];

interface CountrySelectorProps {
  value?: Country;
  onValueChange: (country: Country) => void;
}

export function CountrySelector({ value, onValueChange }: CountrySelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between"
        >
          {value ? (
            <>
              <span className="mr-1">{value.flag}</span>
              {value.isd}
            </>
          ) : (
            "Select country"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.name}
                  onSelect={() => {
                    onValueChange(country);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value?.code === country.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="mr-2">{country.flag}</span>
                  <span className="mr-2">{country.name}</span>
                  <span className="text-muted-foreground">{country.isd}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { countries };
export type { Country }; 