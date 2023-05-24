import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}
  
	static getDerivedStateFromError() {

		return { hasError: true };
	}
  
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {

		console.log(error, errorInfo);
	}
  
	render() {
		const {hasError} = this.state;
		const {children} = this.props;


		if (hasError) {

			return (
				<Suspense fallback={<Loader/>}>
					<PageError/>
				</Suspense>
			);
				
			
		}
  
		return children; 
	}
}