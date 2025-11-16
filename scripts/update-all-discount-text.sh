#!/bin/bash

# Script to update all CTA button components to use dynamic discount

echo "🔄 Updating CTA button components to use dynamic discount..."

# Array of CTA button files
CTA_FILES=(
  "src/components/JumpStartCTAButton.tsx"
  "src/app/services/towing/TowingCTAButton.tsx"
  "src/app/services/lockout/LockoutCTAButton.tsx"
  "src/app/services/tire-change/TireChangeCTAButton.tsx"
  "src/app/services/gas-delivery/GasDeliveryCTAButton.tsx"
  "src/app/services/winch-out/WinchOutCTAButton.tsx"
)

for file in "${CTA_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Processing $file..."

    # Add import if not present
    if ! grep -q "useOnlineDiscount" "$file"; then
      # Add import after "use client"
      sed -i '' '/"use client";/a\
import { useOnlineDiscount } from "@/hooks/useOnlineDiscount";
' "$file"
    fi

    # Add hook call after function declaration if not present
    if ! grep -q "const { discountText } = useOnlineDiscount" "$file"; then
      # Find function declaration and add hook on next line
      sed -i '' '/^export default function.*{$/a\
  const { discountText } = useOnlineDiscount();
' "$file"
    fi

    # Replace hardcoded 15% with dynamic value
    sed -i '' 's/Save 15%/Save {discountText}/g' "$file"
    sed -i '' 's/Order Online & Save 15%/Order Online \& Save {discountText}/g' "$file"

    echo "✅ Updated $file"
  else
    echo "⚠️  File not found: $file"
  fi
done

echo ""
echo "✨ Done! Updated ${#CTA_FILES[@]} CTA button files"
