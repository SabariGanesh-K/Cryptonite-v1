import React from "react";

export default function checkNetworkStability() {

    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (!connection) return null;
  
    const { effectiveType } = connection;
    if (effectiveType === '5g' || effectiveType === 'wifi') {
      return 'stable';
    } else {
      return 'weak';
    }
  }
  